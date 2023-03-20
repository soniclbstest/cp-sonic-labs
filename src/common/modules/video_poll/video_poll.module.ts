import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserVideoPoll } from '../user_video_poll/entity/user_video_poll.entity';
import { VideoPoll } from './entity/video_poll.entity';
import { VideoPollController } from './video_poll.controller';
import { VideoPollService } from './video_poll.service';

@Module({
  imports: [TypeOrmModule.forFeature([VideoPoll, UserVideoPoll])],
  controllers: [VideoPollController],
  providers: [VideoPollService],
})
export class VideoPollModule {}
