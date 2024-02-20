import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast from '../utilities/toast';
import Index from '../pages/Index';
import routes from '../routes';
import { useAppSelector } from '../utilities/hooks';

const App = () => {
  const { error } = useAppSelector((state) => state.items);

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

  return (
    <BrowserRouter basename="/">
      <hr className="mt-0" />
      <div className="container">
        <Routes>
          <Route path={routes.homePage} element={<Index />} />
        </Routes>
      </div>
      <hr className="mb-4" />
    </BrowserRouter>
  );
};

export default App;
