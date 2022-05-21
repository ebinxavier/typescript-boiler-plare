import Logger from 'js-logger';
import init from '@utils/initialize';

init();
Logger.info(`Server is running at PORT : ${process.env.PORT}...`);
