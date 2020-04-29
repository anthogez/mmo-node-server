import * as http from 'http';
import * as normalizePort from 'normalize-port';

import app from './core/app';
import { logger } from './helpers';

const processStartTime = Date.now();
const port = normalizePort(process.env.PORT || 7777);
const server = http.createServer(app);

server.listen(port, () =>
  logger.info(
    {
      serverStartupMs: Date.now() - processStartTime,
      port,
    },
    `MMO Server is running and listening on port ${port}.`
  )
);
