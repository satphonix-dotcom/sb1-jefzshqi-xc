```typescript
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './';
import { fetchUserOrders, fetchVendorOrders } from '../store/slices/orderSlice';

export const useOrders = (type: 'user' | 'vendor' = 'user') => {
  const dispatch = useAppDispatch();
  const { userOrders, vendorOrders, loading, error } = useAppSelector(state => state.orders);

  useEffect(() => {
    if (type === 'vendor') {
      dispatch(fetchVendorOrders());
    } else {
      dispatch(fetchUserOrders());
    }
  }, [dispatch, type]);

  return {
    orders: type === 'vendor' ? vendorOrders : userOrders,
    loading,
    error
  };
};
```