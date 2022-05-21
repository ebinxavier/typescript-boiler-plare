import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// Importing Routes

import homeRoute from './home';

const app = express();

/**
 * Route Initialization Function
 * It will setup Swagger and API routes.
 */
const init = () => {
  app.listen(process.env.PORT);
  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(swaggerDocument));
  app.get('/', (_req, res) => {
    res.send('<h1>Hello World..!</h1>');
  });

  // Setting Routes
  app.use('/home', homeRoute);
};

export default init;
