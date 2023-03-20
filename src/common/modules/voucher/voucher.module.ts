import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { Voucher } from './entity/voucher.entity';
import { VoucherController } from './voucher.controller';
import { VoucherService } from './voucher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher, User])],
  controllers: [VoucherController],
  providers: [VoucherService],
})
export class VoucherModule {}
