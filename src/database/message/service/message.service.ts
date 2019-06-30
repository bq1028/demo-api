import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService {

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ){}

    async create(message: Message): Promise<Message> {
        return await this.messageRepository.save(message);
    }

    async findAll(): Promise<Message[]> {
        return await this.messageRepository.find();
    }

    async findOne(id: number): Promise<Message> {
        return await this.messageRepository.findOne(id);
    }

    async update(id: number, update: Message): Promise<Message> {
        let entry = await this.messageRepository.findOne(id);
        update.id = entry.id;
        entry = update;
        return await this.messageRepository.save(entry);
    }

    async remove(id: number): Promise<Message> {
        let entry = await this.messageRepository.findOne(id);
        return await this.messageRepository.remove(entry);
    }
}
