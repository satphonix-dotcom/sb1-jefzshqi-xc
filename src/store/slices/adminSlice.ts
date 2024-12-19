import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { User, VendorProfile, Product } from '../../types';
import { handleApiError } from '../../utils/errorHandler';

interface AdminState {
  users: User[];
  pendingVendors: VendorProfile[];
  pendingProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  users: [],
  pendingVendors: [],
  pendingProducts: [],
  loading: false,
  error: null
};

export const fetchUsers = createAsyncThunk(
  'admin/fetchUsers',
  async () => {
    try {
      const response = await api.get('/admin/users');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

export const updateUserStatus = createAsyncThunk(
  'admin/updateUserStatus',
  async ({ userId, status }: { userId: string; status: string }) => {
    try {
      const response = await api.patch(`/admin/users/${userId}/status`, { status });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

export const fetchPendingVendors = createAsyncThunk(
  'admin/fetchPendingVendors',
  async () => {
    try {
      const response = await api.get('/admin/vendors/pending');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

export const approveVendor = createAsyncThunk(
  'admin/approveVendor',
  async (vendorId: string) => {
    try {
      const response = await api.post(`/admin/vendors/${vendorId}/approve`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

export const fetchPendingProducts = createAsyncThunk(
  'admin/fetchPendingProducts',
  async () => {
    try {
      const response = await api.get('/admin/products/pending');
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

export const approveProduct = createAsyncThunk(
  'admin/approveProduct',
  async (productId: string) => {
    try {
      const response = await api.post(`/admin/products/${productId}/approve`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      // Vendors
      .addCase(fetchPendingVendors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingVendors = action.payload;
      })
      .addCase(fetchPendingVendors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pending vendors';
      })
      .addCase(approveVendor.fulfilled, (state, action) => {
        state.pendingVendors = state.pendingVendors.filter(
          vendor => vendor._id !== action.payload._id
        );
      })
      // Products
      .addCase(fetchPendingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingProducts = action.payload;
      })
      .addCase(fetchPendingProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pending products';
      })
      .addCase(approveProduct.fulfilled, (state, action) => {
        state.pendingProducts = state.pendingProducts.filter(
          product => product._id !== action.payload._id
        );
      });
  }
});

export const { clearError } = adminSlice.actions;
export default adminSlice.reducer;