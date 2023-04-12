import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entity/payment.entity';
import { UpdatePaymentStatusDto } from './dtos/update_payment.dto';
import { CreatePaymentDto } from './dtos/create_payment.dto';
import { Status } from './types/payment.types';

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
    findOneByPaymentId(id: string): Promise<Payment> {
        try {
            return this.paymentRepository.findOneBy({
                payment_id: id
            })
        } catch (error) {
            throw new Error('Method not implemented.')
        }
    }
    updatePayment(payment: Payment, status: Status): Promise<Payment> {
        try {
            payment.status = status
            return this.paymentRepository.save(
                payment
            )
        } catch (error) {
            throw new Error('Method not implemented.');
        }
    }
}
