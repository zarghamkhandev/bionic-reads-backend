import { Module } from '@nestjs/common';
import { PaddleService } from './paddle.service';
import { PaddleController } from './paddle.controller';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

@Module({
  controllers: [PaddleController],
  providers: [PaddleService],
  imports: [SubscriptionsModule],
})
export class PaddleModule {}
