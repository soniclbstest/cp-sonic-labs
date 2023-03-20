import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entity/payment.entity';
import { UpdatePaymentStatusDto } from './dtos/update_payment.dto';
import { CreatePaymentDto } from './dtos/create_payment.dto';

@Injectable()
export class PaymentRepository {
    
    constructor(
        @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    ) { }

    create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        try {
            //find membership is already created
            const newPayment = this.paymentRepository.create({ ...createPaymentDto });
            return this.paymentRepository.save(newPayment);
        } catch (error) {
            return error;
        }
    }

    findAll(): Promise<Payment[]> {
        try {
            return this.paymentRepository.find();
        } catch (error) {
            throw new Error('Method not implemented.');
        }
    }
    findById(id: number): Promise<Payment> {
        try {
            return this.paymentRepository.findOneBy({
                id: id,
            });
        } catch (error) {
            throw new Error('Method not implemented.');
        }
    }
    updatePaymentStatus(updatePaymentStatus: UpdatePaymentStatusDto) {
        try {
            return this.paymentRepository.findOneBy({
                id: +updatePaymentStatus.txn_id, //Todo
            });
        } catch (error) {
            throw new Error('Method not implemented.');
        }
    }
}
