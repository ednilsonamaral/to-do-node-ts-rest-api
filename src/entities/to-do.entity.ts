import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        nullable: true,
        name: 'updated_at'
    })
    updatedAt: Date;

    @Column({
        nullable: true,
        name: 'finished_at'
    })
    finishedAt: Date;
    
}
