import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ActivateDto } from './dto/activate.dto';
import { Response } from 'express';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  async activate(@Body() body: ActivateDto, @Res() res: Response) {
    const { code } = body;

    const subscription = await this.subscriptionsService.verifySubscription(
      code,
    );

    if (!subscription) {
      throw new BadRequestException('invalid licence');
    }

    // if (subscription.isUsed) {
    //   throw new BadRequestException('licence already used');
    // }

    await this.subscriptionsService.updateOne(subscription.id, {
      isUsed: true,
    });

    return {
      status: 'success',
    };
  }
}
