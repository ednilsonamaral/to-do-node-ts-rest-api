import { Router } from 'express';

import Route from '../interfaces/routes.interface';

import ToDoController from '../controllers/to-do.controller';

class ToDoRoute implements Route {

    public path = '/api/v1/tasks';
    public router = Router();

    public controller = new ToDoController();

    constructor() {
        this.startRoutes();
    }

    private startRoutes() {
        this.router.post(`${this.path}`, this.controller.create);
        this.router.get(`${this.path}`, this.controller.getAll);
        this.router.get(`${this.path}/:id`, this.controller.getById);
        this.router.put(`${this.path}/:id`, this.controller.update);
        this.router.delete(`${this.path}/:id`, this.controller.remove);
    }

}

export default ToDoRoute;