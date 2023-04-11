import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Coinpayments from 'coinpayments';
import { CreateCoinPaymentDTO } from './dto/coinpayment.dto';
import { CoinpaymentsCreateTransactionResponse } from 'coinpayments/dist/types/response';
import {
  CoinPaymentCallBackResponse,
  StatusNumber,
} from './types/coinpayment.types';
import { PaymentRepository } from 'src/common/modules/payment/payment.repository';
import {
  PaymentMethod,
  PaymentType,
  Status,
} from 'src/common/modules/payment/types/payment.types';
import { UserRepository } from 'src/common/modules/user/user.repository';
import { MembershipRepository } from 'src/common/modules/membership/membership.repository';
import { HandleCoinPaymentDto } from './dto/handleCoinPayment.dto';
import crypto from "crypto"
@Injectable()
export class CoinpaymentsService {
  constructor(
    private configService: ConfigService,
    private readonly paymentRepository: PaymentRepository,
    private readonly userRepository: UserRepository,
    private readonly membershipRepository: MembershipRepository,
  ) {
    this.client = new Coinpayments({
      key: this.configService.get<string>('COIN_PAYMENT_KEY'),
      secret: this.configService.get<string>('COIN_PAYMENT_SK'),
    });
  }

  private client: Coinpayments;
  private readonly logger = new Logger(`coin-payment-service`);

  //create coin-payment txn
  async createCoinPayment(
    createCoinPaymentDTO: CreateCoinPaymentDTO,
  ): Promise<CoinpaymentsCreateTransactionResponse> {
    const { amount, currency, email, userId, membershipId } =
      createCoinPaymentDTO;
    //find the user
    // const user = await this.userRepository.findById(userId);

    // if (!user) {
    //   this.logger.error(`user not found ${userId}`);
    //   throw new Error(`User not found`);
    // }
    // const membership = await this.membershipRepository.findById(membershipId);
    // if (!membership) {
    //   this.logger.error(`membrtship not found ${membershipId}`);
    //   throw new Error(`Membership not found`);
    // }

    return await this.client
      .createTransaction({
        currency1: 'USD',
        currency2: currency, //BTC | ETH | LTCT
        amount: amount,
        buyer_email: "praveen@gmail.com",
        // buyer_name: user.username,
        custom: 'coinbureau-hub',
        ipn_url: `https://cp-sonic-labs-production-2.up.railway.app/coin-payments/coin-payment-webhook`//?userId=${userId}&membershipId=${membershipId}
        // ipn_url: `${this.configService.get<string>("COIN_PAYMENT_BASE_URL")}/coin-payments/coin-payment-webhook?userId=${userId}&membershipId=${membershipId}`
      })
      .then((res) => {
        //save payment
        // this.paymentRepository.create({
        //   user: user,
        //   membership: membership,
        //   payment_id: res.txn_id,
        //   amount: +res.amount,
        //   payment_method: PaymentMethod.CRYPTO,
        //   payment_type: PaymentType.YEARLY,
        //   expire_date: '',
        //   create_date: new Date().toString(),
        //   status: Status.PENDING,
        // }).then((res) => {
        //   this.logger.log(
        //     `payment created ${new Date()} ${user.id} ${res.payment_id} ${email}`,
        //   );
        // }).catch((error) => {
        //   throw new Error(`Error when saving the payment ${error} ${userId}`)
        // })

        this.logger.log(`https://cp-sonic-labs-production-2.up.railway.app/coin-payments/coin-payment-webhook`)//?userId=${userId}&membershipId=${membershipId}
        return res;
      })
      .catch((error) => {
        this.logger.error(
          `coin payment creation error email=${email} ${error}`,
        );
        console.log(error);
        return error;
      });
  }

  async handleCallBackdetails(callBackData: any, queryData: HandleCoinPaymentDto, hash: string) {
    this.logger.log(`handleCallBackdetails ${queryData.membershipId} ${queryData.userId}`)
    console.log(hash, "___hash")
    // const { userId, membershipId } = queryData
    // this.logger.log(`IPN callback data ${callBackData}`);
    console.log(callBackData, "callback_data")
    // const user = await this.userRepository.findById(+userId);
    const hmac = crypto.createHmac("sha512", "12345")
    let data = hmac.update(callBackData)
    let signature = data.digest("hex")
    console.log(signature, "___signature")
    // if (!user) {
    //   this.logger.error(`user not found ${userId}`);
    //   throw new Error(`User not found`);
    // }
    // const payment = await this.paymentRepository.findOneByPaymentId(
    //   callBackData.txn_id,
    // );
    // //check payment
    // if (!payment) {
    //   throw new Error(`Payment Not Found`);
    // }
    // const membership = await this.membershipRepository.findById(+membershipId);
    // if (!membership) {
    //   this.logger.error(`membrtship not found ${membershipId}`);
    //   throw new Error(`Membership not found`);
    // }
    //pending
    // if (callBackData.status === StatusNumber.PENDING) {
    //   this.logger.log(`pending ${callBackData.status} ${StatusNumber.PENDING}`);
    //   //update the payment status
    //   this.paymentRepository
    //     .updatePayment(payment, Status.PENDING)
    //     .then((res) => {
    //       this.logger.log(
    //         `Payment status updated ${new Date()} ~~~ ${res.payment_id} `,
    //       );
    //     })
    //     .catch((error) => {
    //       this.logger.error(
    //         `Payment status updating error ${new Date()} ~~~ ${callBackData.txn_id
    //         } ~~~ ${error}`,
    //       );
    //     });
    // }
    // //funds sent
    // if (callBackData.status === StatusNumber.FUNDSSENT) {
    //   this.logger.log(
    //     `fund sent ${callBackData.status} ${StatusNumber.FUNDSSENT}`,
    //   );
    //   //update the payment status
    //   this.paymentRepository
    //     .updatePayment(payment, Status.FUNDS_SENT)
    //     .then((res) => {
    //       this.logger.log(
    //         `Payment status updated ${new Date()} ~~~ ${res.payment_id} `,
    //       );
    //     })
    //     .catch((error) => {
    //       this.logger.error(
    //         `Payment status updating error ${new Date()} ~~~ ${callBackData.txn_id
    //         } ~~~ ${error}`,
    //       );
    //     });
    // }
    // //completed
    // if (
    //   callBackData.status === StatusNumber.COMPLETED ||
    //   callBackData.status === StatusNumber.COMPLETED_2
    // ) {
    //   this.logger.log(
    //     `Completed ${callBackData.status} ${StatusNumber.COMPLETED}`,
    //   );
    //   //update the payment status
    //   this.paymentRepository
    //     .updatePayment(payment, Status.COMPLETED)
    //     .then((res) => {
    //       this.logger.log(
    //         `Payment status updated ${new Date()} ~~~ ${res.payment_id} `,
    //       );
    //       //update the membership status
    //       this.userRepository.updateUserMembership(+userId, membership).then((res) => {
    //         this.logger.log(`user membership status updated ${userId} ${payment.id} ${membership.id}`)
    //       })
    //     })
    //     .catch((error) => {
    //       this.logger.error(
    //         `Payment status updating error ${new Date()} ~~~ ${callBackData.txn_id
    //         } ~~~ ${error}`,
    //       );
    //     });
    // }

    // //canceled
    // if (
    //   Math.sign(+callBackData.status) === +StatusNumber.CANCELED ||
    //   Number.isNaN(Math.sign(+callBackData.status))
    // ) {
    //   this.logger.log(
    //     `Canceled ${callBackData.status} ${StatusNumber.CANCELED}`,
    //   );
    //   //update the payment status
    //   this.paymentRepository
    //     .updatePayment(payment, Status.CANCELLED)
    //     .then((res) => {
    //       this.logger.log(
    //         `Payment status updated ${new Date()} ~~~ ${res.payment_id} `,
    //       );
    //     })
    //     .catch((error) => {
    //       this.logger.error(
    //         `Payment status updating error ${new Date()} ~~~ ${callBackData.txn_id} ~~~ ${error}`,
    //       );
    //     });
    // } else {
    //   throw new ForbiddenException ({
    //     message: "Nothing happened",
    //     status: 403
    //   })
    // };
  }
}
