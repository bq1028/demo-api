import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    author: string;

    @Column('text')
    content: string;

    @Column('int')
    Date: number;
}
