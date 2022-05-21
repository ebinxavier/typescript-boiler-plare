import dotEnv from 'dotenv';
import Logger from 'js-logger';
import swaggerInit from '../routes';

/**
 * It initializes env variables swagger and logger
 */
const initialize = () => {
  dotEnv.config();
  Logger.useDefaults({
    defaultLevel: process.env.VERBOSE ? Logger.INFO : Logger.ERROR
  });
  swaggerInit();
};

export default initialize;
