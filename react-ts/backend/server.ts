import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import router from './src/api.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app: Application = express();
const port = process.env.PORT || 3001;

const buildPath = process.env.DB === 'LOCAL'
  ? join(__dirname, '..', 'frontend', 'public')
  : join(__dirname, '..', 'frontend');

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use(router);

app.get('/*', (req: Request, res: Response) => res.sendFile(join(buildPath, 'index.html')));

app.listen(port, () => console.log(`Server is online on port: ${port}`));
