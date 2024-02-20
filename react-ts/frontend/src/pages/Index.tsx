import { useEffect } from 'react';
import { fetchItems, selectors } from '../slices/itemsSlice';
import { Item } from '../types/Item';
import Card from '../components/Card';
import { useAppDispatch, useAppSelector } from '../utilities/hooks';

const Index = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectors.selectAll);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="container">
      <div className="market">
        {items.map((item: Item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Index;
