```typescript
import api from '../utils/api';
import { Order } from '../types/order';
import { handleApiError } from '../utils/errorHandler';

export class OrderService {
  static async createOrder(orderData: Partial<Order>): Promise<Order> {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async getUserOrders(): Promise<Order[]> {
    try {
      const response = await api.get('/orders/user');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async getVendorOrders(): Promise<Order[]> {
    try {
      const response = await api.get('/orders/vendor');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async getOrderById(id: string): Promise<Order> {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async updateOrderStatus(id: string, status: string): Promise<Order> {
    try {
      const response = await api.patch(`/orders/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
```