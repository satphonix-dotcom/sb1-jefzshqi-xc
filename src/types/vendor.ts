export interface VendorProfile {
  _id: string;
  businessName: string;
  businessAddress: string;
  taxId: string;
  phoneNumber: string;
  website?: string;
  description?: string;
  status: VendorStatus;
  createdAt: string;
  user: string;
}

export type VendorStatus = 'pending' | 'approved' | 'rejected';

export interface VendorStats {
  totalSales: number;
  activeProducts: number;
  pendingOrders: number;
  averageRating: number;
}