const apiPath = '/api';

interface ApiUrl {
  [key: string]: string;
}

export default {
  homePage: '/',
  notFoundPage: '*',
  getAllItems: [apiPath, 'market', 'getall'].join('/'),
} as ApiUrl;
