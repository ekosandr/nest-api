import { Module } from '@nestjs/common';
import { TopPageModelModule } from './top-page.model/top-page.model.module';
import { TopPageController } from './top-page.controller';

@Module({
  imports: [TopPageModelModule],
  controllers: [TopPageController]
})
export class TopPageModule {}
