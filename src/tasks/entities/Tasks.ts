import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('tasks')
class Tasks {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    state: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    completed_at: Date;
}

export default Tasks;
