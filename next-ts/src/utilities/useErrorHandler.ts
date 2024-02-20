import { useEffect } from 'react';
import type { Error } from '@/types/InitialState';
import toast from './toast';

const useErrorHandler = (error: Error) => {
  useEffect(() => {
    const errorHandler = (err: string) => {
      const [match] = err.match(/\d+/) ?? '500';
      const codeError = parseInt(match, 10);
      if (codeError === 401) {
        toast('Ошибка аутентификации', 'error');
      }
      if (codeError === 500) {
        toast('Неизвестная ошибка', 'error');
      }
      console.log(err);
    };

    if (error) {
      errorHandler(error);
    }
  }, [error]);
};

export default useErrorHandler;
