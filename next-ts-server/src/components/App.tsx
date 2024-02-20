import {
  useMemo, useState, useEffect, useCallback,
} from 'react';
import notify from '../utilities/toast';
import NavBar from './NavBar';
import { MobileContext } from './Context';
import routes from '../routes';
import { useAppDispatch, useAppSelector } from '../utilities/hooks';

const App = ({ children, isMob }: { children: JSX.Element, isMob: boolean }) => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.items);

  const [isMobile, setIsMobile] = useState(isMob);

  useEffect(() => {
    const errorHandler = (err: string) => {
      const [match] = err.match(/\d+/) ?? '500';
      const codeError = parseInt(match, 10);
      if (codeError === 401) {
        notify('Ошибка аутентификации', 'error');
      }
      if (codeError === 500) {
        notify('Неизвестная ошибка', 'error');
      }
      console.log(err);
    };

    if (error) {
      errorHandler(error);
    }
  }, [error]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMob);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      <NavBar />
      <div className="container">
        {children}
      </div>
      <hr className="mb-4" />
    </MobileContext.Provider>
  );
};

export default App;
