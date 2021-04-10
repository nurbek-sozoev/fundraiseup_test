import 'reflect-metadata';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import { createKoaServer, useContainer } from 'routing-controllers';
import { createConnection, useContainer as ormUseContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import * as koaStaticServe from 'koa-static';
import resourceNotFound from './middlewares/resourceNotFound';

import { DonationsController } from './controllers/DonationsController';

const FRONTEND_FILES = `${__dirname}/../../frontend/dist`;

const run = async () => {
    const app = createKoaServer({
        controllers: [DonationsController]
    });

    app.use(json());
    app.use(logger());
    app.use(koaStaticServe(FRONTEND_FILES));
    app.use(resourceNotFound);

    const port = 3000;
    app.listen(port, () => {
        console.log(
          'Koa server running at:\n' +
          `http://localhost:${ port } \n`
        );
    });
};

ormUseContainer(Container);
useContainer(Container);

createConnection().then(run).catch(error => console.log(error));
