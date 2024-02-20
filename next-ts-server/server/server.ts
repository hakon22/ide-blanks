/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import 'dotenv/config';
import express from 'express';
import next from 'next';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import router from './api.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(cors());
  server.use(router);
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => console.log(`Server is online on port: ${port}`));
});

export const uploadFilesPath = process.env.NODE_ENV === 'development'
  ? join(__dirname, '..', 'src', 'images')
  : join(__dirname, '..', '.next', 'static', 'media');
