import * as http from 'http';
import * as net from 'net';
import * as normalizePort from 'normalize-port';

import app from '../core/app';
import { logger } from '../helpers';

const processStartTime = Date.now();
const port = normalizePort(process.env.PORT || 2106);
const host = '127.0.0.1';
//const server = http.createServer(app);

export class Auth {
  static readonly protocolRev = 0x0106;

  launch() {
    net.createServer().listen(port, host, () => {
      logger.info(
        {
          serverStartupMs: Date.now() - processStartTime,
          port,
        },
        `Auth Server is running and listening on port ${port} & host ${host}.`
      );
    });
  }
}

// server.listen(port, () =>
//   logger.info(
//     {
//       serverStartupMs: Date.now() - processStartTime,
//       port,
//     },
//     `MMO Server is running and listening on port ${port}.`
//   )
// );
