const serverHost = `http://localhost:${process.env.PORT ?? 3001}`;
const apiPath = '/api';

interface ApiUrl {
  [key: string]: string;
}

export default {
  homePage: '/',
  notFoundPage: '*',
  getAllItems: [serverHost, apiPath, 'market', 'getall'].join('/'),
} as ApiUrl;
