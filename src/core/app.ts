import * as helmet from 'helmet';
import * as express from 'express';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(helmet.xssFilter());

export default app;
