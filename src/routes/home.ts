import express from 'express';
const router = express.Router();

// define the home page route
router.get('/', (_req: express.Request, res: express.Response) => {
  res.send('<h1>Home page</h1>');
});

export default router;
