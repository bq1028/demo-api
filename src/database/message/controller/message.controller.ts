import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MessageDto } from "../dto/message.dto";
import { Message } from '../entity/message.entity';
import { MessageService } from "../service/message.service";


@Controller('messages')
export class MessageController {

    constructor(private readonly messageService: MessageService){}

    @Post()
    async create(@Body() messageDto: MessageDto): Promise<Message> {
        return await this.messageService.create(messageDto);
    }

    @Get()
    async findAll(): Promise<Message[]> {
        return await this.messageService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Message> {
        return await this.messageService.findOne(parseInt(id));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() messageDto: MessageDto): Promise<Message> {
        return this.messageService.update(parseInt(id), messageDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Message> {
        return this.messageService.remove(parseInt(id));
    }
}
