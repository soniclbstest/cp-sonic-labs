import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/create_payment.dto';
import { PaymentService } from './payment.service';

@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.paymentService.findById(+id);
  }
  @Get()
  find() {
    return this.paymentService.findAll();
  }
}
