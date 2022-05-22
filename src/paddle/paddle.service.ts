import { Injectable } from '@nestjs/common';
import { CreatePaddleDto } from './dto/create-paddle.dto';
import { UpdatePaddleDto } from './dto/update-paddle.dto';

@Injectable()
export class PaddleService {
  create(createPaddleDto: CreatePaddleDto) {
    return 'This action adds a new paddle';
  }

  findAll() {
    return `This action returns all paddle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paddle`;
  }

  update(id: number, updatePaddleDto: UpdatePaddleDto) {
    return `This action updates a #${id} paddle`;
  }

  remove(id: number) {
    return `This action removes a #${id} paddle`;
  }
}
