import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { PaddleService } from './paddle.service';
import { PaymentSuccessDto } from './dto/payment-success.dto';
import { Response } from 'express';
import { PaddleGuard } from '../auth/paddle.guard';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
@UseGuards(PaddleGuard)
@Controller('paddle')
export class PaddleController {
  constructor(private subscriptionsService: SubscriptionsService) {}

  @Post()
  async create(@Body() body: PaymentSuccessDto, @Res() res: Response) {
    const sub = this.subscriptionsService.makeOne(body);
    await this.subscriptionsService.createOne(sub);
    return res.status(200).send();
  }
}
