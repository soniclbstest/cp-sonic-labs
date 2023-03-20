import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { Gift } from './entity/gift.entity';
import { GiftController } from './gift.controller';
import { GiftService } from './gift.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gift, User])],
  controllers: [GiftController],
  providers: [GiftService],
})
export class GiftModule {}
