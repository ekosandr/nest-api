import { Module } from '@nestjs/common';
import { ProductModelModule } from './product.model/product.model.module';
import { ProductController } from './product.controller';

@Module({
  imports: [ProductModelModule],
  controllers: [ProductController]
})
export class ProductModule {}
