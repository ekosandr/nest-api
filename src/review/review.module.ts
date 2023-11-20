import { Module } from '@nestjs/common';
import { ReviewModelModule } from './review.model/review.model.module';
import { ReviewController } from './review.controller';

@Module({
  imports: [ReviewModelModule],
  controllers: [ReviewController]
})
export class ReviewModule {}
