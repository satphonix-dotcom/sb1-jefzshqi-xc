import api from '../utils/api';
import { PaymentDetails, PaymentResponse } from '../types/payment';
import { handleApiError } from '../utils/errorHandler';

export class PaymentService {
  static async processPayment(orderId: string, paymentDetails: PaymentDetails): Promise<PaymentResponse> {
    try {
      const response = await api.post('/payments/process', {
        orderId,
        paymentDetails
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async getPaymentStatus(orderId: string): Promise<PaymentResponse> {
    try {
      const response = await api.get(`/payments/${orderId}/status`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}