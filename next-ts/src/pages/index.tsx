import useErrorHandler from '@/utilities/useErrorHandler';
import { Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../utilities/hooks';

const Index = () => {
  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.items);

  useErrorHandler(error);

  return !error ? (
    <div className="position-absolute top-50 start-50">
      <Spinner animation="border" variant="primary" role="status" />
    </div>
  ) : (
    <div>
      Error
    </div>
  );
};

export default Index;
