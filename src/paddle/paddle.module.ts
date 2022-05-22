import { Module } from '@nestjs/common';
import { PaddleService } from './paddle.service';
import { PaddleController } from './paddle.controller';

@Module({
  controllers: [PaddleController],
  providers: [PaddleService]
})
export class PaddleModule {}
