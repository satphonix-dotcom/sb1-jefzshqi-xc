```typescript
import api from '../utils/api';
import { Product, ProductFilters } from '../types/product';
import { handleApiError } from '../utils/errorHandler';

export class ProductService {
  static async getProducts(filters?: ProductFilters): Promise<Product[]> {
    try {
      const response = await api.get('/products', { params: filters });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async getProductById(id: string): Promise<Product> {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const response = await api.post('/products', productData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    try {
      const response = await api.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async deleteProduct(id: string): Promise<void> {
    try {
      await api.delete(`/products/${id}`);
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
```