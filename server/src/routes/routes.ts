import { Request, Response, Router } from 'express';
import { Example } from '../controller/example.controller';

export const routes = Router();

// Server health check
routes.get('/health', (req: Request, res: Response) =>
  res.send({
    message: 'Magenta Tiger Headless CMS is up and running',
    code: 200,
  })
);

routes.post('/create', (req: Request, res: Response) =>
  new Example().createExamplePost(req, res)
);
