import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [SubscriptionsModule],
})
export class AuthModule {}
