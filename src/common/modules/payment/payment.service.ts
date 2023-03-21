import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { Payment } from './entity/payment.entity';
import { CreatePaymentDto } from './dtos/create_payment.dto';

@Injectable()
export class PaymentService {
  constructor(private paymentRepository: PaymentRepository) {}

  create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    try {
      return this.paymentRepository.create(createPaymentDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findAll(): Promise<Payment[]> {
    try {
      return this.paymentRepository.findAll();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findById(id: number) {
    try {
      return this.paymentRepository.findById(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //find item id by paymentId
  findOneByPaymentId(paymentId: string) {
    try {
      return this.paymentRepository.findOneByPaymentId(paymentId);
    } catch (error) {
      return error;
    }
  }

}
