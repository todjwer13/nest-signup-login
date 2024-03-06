import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
