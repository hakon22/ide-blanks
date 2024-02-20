import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import type { GetServerSideProps } from 'next';
import useErrorHandler from '@/utilities/useErrorHandler';
import { fetchItems, itemsAdd, selectors } from '@/slices/itemsSlice';
import { useAppDispatch, useAppSelector } from '@/utilities/hooks';
import type { Item } from '@/types/Item';
import type { Error } from '@/types/InitialState';
import store from '@/slices';
import { fetchingItemsImage } from '@/utilities/fetchImage';

type ItemsProps = {
  fetchedItems: Item[];
  error: Error;
};

const Index = ({ fetchedItems, error }: ItemsProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectors.selectAll);

  useEffect(() => {
    dispatch(itemsAdd(fetchedItems));
  }, []);

  useErrorHandler(error);

  return !fetchedItems.length ? (
    <div className="position-absolute top-50 start-50">
      <Spinner animation="border" variant="primary" role="status" />
    </div>
  ) : (
    <div>
      {fetchedItems.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q } = query;
  await store.dispatch(fetchItems());
  const { error, entities: items } = store.getState().items;
  const fetchedItems = Object.values(items);
  // const fetchedItems = await fetchingItemsImage<Item>(items);

  return { props: { fetchedItems, error } };
};

export default Index;
