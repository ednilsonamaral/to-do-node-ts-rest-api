import 'dotenv/config';

import App from './app';

import IndexRoute from './routes/index.route';

const app = new App();
const server = app.listen();

app.startRoutes([
    new IndexRoute(),
]);

export default server;