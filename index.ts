import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post('/', (req: Request, res: Response) => {
  console.log('# It is working!');
  res.send('Express & TypeScript boilerplate');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
