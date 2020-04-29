import * as pino from 'pino';

const logger = pino({
  prettyPrint: {
    forceColor: true,
    timeTransOnly: true,
  },
});

export default logger;
