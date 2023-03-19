import { ToDo } from '../entities/to-do.entity';

import connection from '../config/database';

import { CreateToDoDto } from '../dtos/to-do.dto';

class ToDoService {

    public async create(data: CreateToDoDto) {
        const save = await connection.getRepository(ToDo).save(data);
        return save;
    }

    public async getAll(per_page: number, page: number) {
        const tasks = await connection.getRepository(ToDo).findAndCount({
            order: {
                title: 'ASC',
            },
            skip: page - 1,
            take: per_page,
        });

        return tasks;
    }

    public async getById(id: number) {
        const task = await connection.getRepository(ToDo).findOneBy({
            id
        });

        return task;
    }

    public async update(id: number, data: CreateToDoDto) {
        data.updatedAt = new Date();

        const task = await connection.getRepository(ToDo).findOneBy({ id });

        if (!task) {
            return null;
        }
        
        connection.getRepository(ToDo).merge(task, data);
        
        const result = await connection.getRepository(ToDo).save(task);
        return result;
    }

    public async remove(id: number) {
        const task = await connection.getRepository(ToDo).findOneBy({ id });

        if (!task) {
            return null;
        }

        const removed = await connection.getRepository(ToDo).delete(id);
        return removed;
    }

}

export default ToDoService;