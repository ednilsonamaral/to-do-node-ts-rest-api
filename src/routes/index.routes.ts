import { Router } from 'express';

import Route from '../interfaces/routes.interface';

import IndexController from '../controllers/index.controller';

class IndexRoute implements Route {

    public path = '/';
    public router = Router();
    public indexController = new IndexController();

    constructor() {
        this.startRoutes();
    }

    private startRoutes() {
        this.router.get(`${this.path}`, this.indexController.index);
        this.router.get(`${this.path}health-check`, this.indexController.healthCheck);
    }

}

export default IndexRoute;