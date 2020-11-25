import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string = '';

    @Column({ length: 25 })
    name: string = '';

    @Column('text')
    description: string = '';

    @CreateDateColumn({ nullable: false })
    createdAt: Date = new Date();

    @CreateDateColumn({ nullable: false })
    updatedAt: Date = new Date();
}
