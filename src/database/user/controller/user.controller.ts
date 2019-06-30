import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UserDto } from "../dto/user.dto";
import { User } from '../entity/user.entity';
import { UserService } from "../service/user.service";
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() userDto: UserDto): Promise<User> {
        return await this.userService.create(userDto);
    }

    @Get()
    @UseGuards(AuthGuard())
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async findOne(@Param('id') id: string): Promise<User> {
        return await this.userService.findOne(parseInt(id));
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<User> {
        return this.userService.update(parseInt(id), userDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    remove(@Param('id') id: string): Promise<User> {
        return this.userService.remove(parseInt(id));
    }
}
