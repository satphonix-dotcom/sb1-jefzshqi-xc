import { useState } from 'react';
import { PaymentService } from '../services/payment.service';
import { PaymentDetails, PaymentResponse } from '../types/payment';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (orderId: string, paymentDetails: PaymentDetails): Promise<PaymentResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await PaymentService.processPayment(orderId, paymentDetails);
      return response;
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Payment failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    processPayment
  };
};