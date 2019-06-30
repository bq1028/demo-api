import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { JwtPayload } from '../interface/jwt-payload.interface';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post()
    async createToken(@Body() user: JwtPayload): Promise<any> {
        return await this.authService.validateUser(user);
    }

    @Get()
    findAll() {
        // this route is restricted by AuthGuard
        // JWT strategy
        return 'AUTH';
    }
}