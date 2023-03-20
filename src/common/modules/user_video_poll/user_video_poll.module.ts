import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoPoll } from '../video_poll/entity/video_poll.entity';
import { User } from '../user/entity/user.entity';
import { UserVideoPoll } from './entity/user_video_poll.entity';
import { UserVideoPollController } from './user_video_poll.controller';
import { UserVideoPollService } from './user_video_poll.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserVideoPoll, User, VideoPoll])],
  controllers: [UserVideoPollController],
  providers: [UserVideoPollService],
})
export class UserVideoPollModule {}
