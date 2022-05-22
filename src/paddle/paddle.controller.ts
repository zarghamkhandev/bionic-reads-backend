import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaddleService } from './paddle.service';
import { CreatePaddleDto } from './dto/create-paddle.dto';
import { UpdatePaddleDto } from './dto/update-paddle.dto';

@Controller('paddle')
export class PaddleController {
  constructor(private readonly paddleService: PaddleService) {}

  @Post()
  create(@Body() createPaddleDto: CreatePaddleDto) {
    return this.paddleService.create(createPaddleDto);
  }

  @Get()
  findAll() {
    return this.paddleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paddleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaddleDto: UpdatePaddleDto) {
    return this.paddleService.update(+id, updatePaddleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paddleService.remove(+id);
  }
}
