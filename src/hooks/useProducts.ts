```typescript
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './';
import { fetchProducts } from '../store/slices/productSlice';
import { ProductFilters } from '../types/product';

export const useProducts = (filters?: ProductFilters) => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, JSON.stringify(filters)]);

  return {
    products,
    loading,
    error
  };
};
```