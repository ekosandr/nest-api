import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './product.model/dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async update(@Body() dto: ProductModel, @Param('id') id: string) {}

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindProductDto) {}
}
