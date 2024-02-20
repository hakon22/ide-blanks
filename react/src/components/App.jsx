import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../slices/itemsSlice';

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.selectAll);

  return (
    <div />
  );
};

export default App;
