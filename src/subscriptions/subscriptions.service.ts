import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentSuccessDto } from '../paddle/dto/payment-success.dto';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
  ) {}

  createOne(subscription: Subscription): Promise<Subscription> {
    return this.subscriptionsRepository.save(subscription);
  }

  makeOne(dto: PaymentSuccessDto) {
    return this.subscriptionsRepository.create(dto);
  }
}
