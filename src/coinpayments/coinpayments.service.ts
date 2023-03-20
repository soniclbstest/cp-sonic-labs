import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Coinpayments from 'coinpayments';
import { CreateCoinPaymentDTO } from './dto/coinpayment.dto';
import { CoinpaymentsCreateTransactionResponse } from 'coinpayments/dist/types/response';
import { CoinPaymentCallBackResponse, Status } from './types/coinpayment.types';

@Injectable()
export class CoinpaymentsService {
  constructor(private configService: ConfigService) {
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
    const { amount, currency, email } = createCoinPaymentDTO;
    this.logger.log(amount);
    return await this.client
      .createTransaction({
        currency1: 'USD',
        currency2: currency, //BTC | ETH | LTCT
        amount: amount,
        buyer_email: email,
        buyer_name: email,
        custom: "coin-hub-cp",
        ipn_url: `https://coinbureau-hub-coinpayments-test-1.up.railway.app/coin-payments/coin-payment-webhook`
        // ipn_url: `${this.configService.get<string>(
        //   'COIN_PAYMENT_BASE_URL',
        // )}/coin-payments/coin-payment-webhook`,
      })

      
      .then((res) => {
        this.logger.warn(
          `${this.configService.get<string>(
            'COIN_PAYMENT_BASE_URL',
          )}/coin-payments/coin-payment-webhook`,
        );
        console.log(res)
        return res;
      })
      .catch((error) => {
        this.logger.error(
          `coin payment creation error email=${email} ${error}`,
        );
        console.log(error)
        return error;
      });
  }

  async handleCallBackdetails(
    callBackData: any,
  ) {
    this.logger.log(`IPN callback data ${callBackData}`);
    if (callBackData.status === Status.PENDING) {
      this.logger.log(`pending ${callBackData.status} ${Status.PENDING}`);
    }
    if (callBackData.status === Status.FUNDSSENT) {
      this.logger.log(`fund sent ${callBackData.status} ${Status.PENDING}`);
    }
    if (
      callBackData.status === Status.COMPLETED ||
      callBackData.status === Status.COMPLETED_2
    ) {
      this.logger.log(`Completed ${callBackData.status} ${Status.PENDING}`);
    }
    if (
      callBackData.status === Status.COMPLETED ||
      callBackData.status === Status.COMPLETED_2
    ) {
      this.logger.log(`Completed ${callBackData.status} ${Status.PENDING}`);
    }
    if (
      Math.sign(+callBackData.status) === +Status.CANCELED ||
      Number.isNaN(Math.sign(+callBackData.status))
    ) {
      this.logger.log(`Canceled ${callBackData.status} ${Status.PENDING}`);
    } else return;
  }
}
