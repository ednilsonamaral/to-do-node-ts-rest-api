import 'dotenv/config';
import './config/database';

import App from './app';

import IndexRoute from './routes/index.routes';
import ToDoRoute from './routes/to-do.routes';

const app = new App();
const server = app.listen();

app.startRoutes([
    new IndexRoute(),
    new ToDoRoute(),
]);

export default server;