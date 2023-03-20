import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Query,
  Logger,
  Get,
} from '@nestjs/common';
import { CoinpaymentsService } from './coinpayments.service';
import { CreateCoinPaymentDTO } from './dto/coinpayment.dto';
import { CoinpaymentsCreateTransactionResponse } from 'coinpayments/dist/types/response';
import { FileInterceptor } from '@nestjs/platform-express';

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
  // @UseInterceptors(FileInterceptor('file'))
  async listenToWebhook(
    @Body() callBackData: any,
  ) {
    this.logger.log(`${new Date()} listenToWebhook called `);
    return await this.coinPaymentsService.handleCallBackdetails(
      callBackData,
    );
  }

  //testing controller
  @Get()
  async get1() {
    return {
      status: "ok",
      function: "get1"
    }
  }

  @Get('coin-payment-webhook')
  async listenToWebhook_get(
    @Body() callBackData: any,
  ) {
    this.logger.log(`${new Date()} listenToWebhook called `);
    this.logger.log(callBackData);
    return {
      status: "ok",
      function: "listenToWebhook_get"
    }
  }
}
