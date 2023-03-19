import { NextFunction, Request, Response } from 'express';

import ToDoService from '../services/to-do.service';

import { CreateToDoDto } from '../dtos/to-do.dto';

class ToDoController {

    public async create(req: Request, res: Response, next: NextFunction) {
        const data: CreateToDoDto = req.body;
        
        try {
            const service = new ToDoService();

            const create = await service.create(data);
            res.status(201).json({ data: create });
        } catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        const { per_page, page } = req.query;

        try {
            const service = new ToDoService();

            const tasks = await service.getAll(Number(per_page), Number(page));
            res.status(200).json({ 
                per_page: Number(per_page),
                page: Number(page),
                total: tasks[1],
                data: tasks[0]
            });
        } catch (error) {
            next(error);
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const service = new ToDoService();

            const task = await service.getById(Number(id));
            res.status(200).json({ data: task });
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const body: CreateToDoDto = req.body;

        try {
            const service = new ToDoService();

            const task = await service.update(Number(id), body);

            if (!task) {
                res.status(404).json({
                    message: 'Task not found',
                    data: null
                });
            } else {
                res.status(200).json({ data: task });
            }
        } catch (error) {
            next(error);
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const service = new ToDoService();

            const task = await service.remove(Number(id));

            if (!task) {
                res.status(404).json({
                    message: 'Task not found',
                    data: null
                });
            } else {
                res.status(200).json({ 
                    message: 'Task removed',
                    data: task
                });
            }
        } catch (error) {
            next(error);
        }
    }

}

export default ToDoController;