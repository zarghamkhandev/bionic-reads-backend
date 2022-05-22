import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { PaddleService } from './paddle.service';
import { PaymentSuccessDto } from './dto/payment-success.dto';
import { Response } from 'express';
import { PaddleGuard } from '../auth/paddle.guard';
@UseGuards(PaddleGuard)
@Controller('paddle')
export class PaddleController {
  constructor(private readonly paddleService: PaddleService) {}

  @Post()
  create(@Body() body: PaymentSuccessDto, @Res() res: Response) {
    console.log(body);

    return res.status(200).send();
  }
}
