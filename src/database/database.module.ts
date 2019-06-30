import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';
import { User } from './user/entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/controller/auth.cotroller';
import { AuthService } from './auth/service/auth.service';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { AUTH_SECRET_KEY } from '../config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: AUTH_SECRET_KEY
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, JwtStrategy]
})
export class DatabaseModule {}
