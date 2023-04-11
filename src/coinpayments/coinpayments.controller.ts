import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Query,
  Logger,
  Get,
  Headers 
} from '@nestjs/common';
import { CoinpaymentsService } from './coinpayments.service';
import { CreateCoinPaymentDTO } from './dto/coinpayment.dto';
import { CoinpaymentsCreateTransactionResponse } from 'coinpayments/dist/types/response';
import { FileInterceptor } from '@nestjs/platform-express';
import { HandleCoinPaymentDto } from './dto/handleCoinPayment.dto';

@Controller('coin-payments')
export class CoinpaymentsController {
  constructor(private readonly coinPaymentsService: CoinpaymentsService) { }
  private readonly logger = new Logger(`coin-payment-controller`);

  //create coin-payment txn
  @Post('create')
  async createCoinPayment(
    @Body() createCoinPaymentDTO: CreateCoinPaymentDTO,
  ): Promise<CoinpaymentsCreateTransactionResponse> {
    return await this.coinPaymentsService.createCoinPayment(
      createCoinPaymentDTO,
    );
  }

  //listen to the IPN url
  @Post('coin-payment-webhook')
  @UseInterceptors(FileInterceptor('file'))
  async listenToWebhook(
    @Body() callBackData: any,
    @Query() queryData: HandleCoinPaymentDto,
    @Headers("hmac") hmac:any 
     ) {
    this.logger.log(
      `${new Date()} listenToWebhook called ~~~ ${queryData.userId} ~~~ ${typeof queryData.userId} ~~~~ ${queryData.membershipId} ~~~ ${callBackData.txn_id}`,
    );
    return await this.coinPaymentsService.handleCallBackdetails(
      callBackData,
      queryData,
      hmac
    );
  }


  //listen to the IPN url get
  @Get('coin-payment-webhook')
  async listenToWebhookget() {
    this.logger.log(
      `${new Date()} listenToWebhook called `,
    );
    return `${new Date()} listenToWebhook called ~~~`
  }
}
