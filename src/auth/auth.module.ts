import { Module } from '@nestjs/common';
import { AuthModelModule } from './auth.model/auth.model.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthModelModule],
  controllers: [AuthController]
})
export class AuthModule {}
