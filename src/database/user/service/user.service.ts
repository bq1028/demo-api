import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserDto } from "../dto/user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOneOrFail({'email': email});
    }

    async update(id: number, update: UserDto): Promise<User> {
        let entry = await this.userRepository.findOne(id);
        this.userRepository.merge(entry, update);
        return await this.userRepository.save(entry);
    }

    async remove(id: number): Promise<User> {
        let entry = await this.userRepository.findOne(id);
        return await this.userRepository.remove(entry);
    }
}
