import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { Auth } from '../interface/auth.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        public jwtService: JwtService,
    ) { }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.userService.findOneByEmail(payload.email);

        if (user.password == payload.password) {
            const auth: Auth = {id: user.id, email: user.email, name: user.name};
            const accessToken = this.jwtService.sign(auth, {'expiresIn': 3600});
            return accessToken;
        } else {
            return false;
        }
    }
}