import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import * as swagger from 'swagger-express-ts';

import Routes from './interfaces/routes.interface';

class App {

    public app: express.Application;
    public port: (string | number);
    public env: boolean;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV !== 'development' ? true : false;

        this.startMiddlewares();
        this.startSwagger();
    }

    public listen(): http.Server {
        return this.app.listen(this.port, () => {
            console.log(`🚀 App listening at the port ${this.port}`);
            
        });
    }

    public getServer() {
        return this.app;
    }

    public startRoutes(routes: Routes[]) {
        const indexRoute = '/';

        console.log('🔥 Starting server..');

        routes.forEach((route) => {
            this.app.use(indexRoute, route.router);
        });
    }

    public startMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json({ limit: '5mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '5mb', parameterLimit: 50000 }));
    }

    private startSwagger() {
        this.app.use('/api/v1/docs', express.static('swagger'));
        this.app.use(swagger.express(
            {
              definition: {
                info: {
                  title: 'Tasks API',
                  version: '1.0',
                },
                externalDocs: {
                  url: process.env.BASE_URL || 'http://localhost:' + process.env.PORT,
                },
              },
            },
          )
        );
    }


}

export default App;
