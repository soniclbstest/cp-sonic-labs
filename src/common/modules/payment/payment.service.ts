import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { Payment } from './entity/payment.entity';
import { UpdatePaymentStatusDto } from './dtos/update_payment.dto';
import { CreatePaymentDto } from './dtos/create_payment.dto';

@Injectable()
export class PaymentService {
    constructor(private paymentRepository: PaymentRepository) {}

    create(createPaymentDto:CreatePaymentDto):Promise<Payment>{
        try {
            return this.paymentRepository.create(createPaymentDto)
        } catch (error) {
          console.log(error)
          return error
        }
    }

    findAll(): Promise<Payment[]> {
      try {
        return this.paymentRepository.findAll();
      } catch (error) {
        console.log(error);
        return error
      }
    }
  
    findById(id: number) {
      try {
        return this.paymentRepository.findById(id);
      } catch (error) {
        console.log(error);
        return error
      }
    }
  
    // updateUserMembership(
    //   id: number,
    //   updatePaymentStatus: UpdatePaymentStatusDto,
    // ) {
    //   try {
    //     return this.paymentRepository.updateUserMembership(
    //       id,
    //       updatePaymentStatus,
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
}
