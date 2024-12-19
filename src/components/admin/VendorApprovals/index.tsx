import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchPendingVendors, approveVendor } from '../../../store/slices/adminSlice';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';
import VendorList from './VendorList';

const VendorApprovals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pendingVendors, loading, error } = useAppSelector(state => state.admin);

  useEffect(() => {
    dispatch(fetchPendingVendors());
  }, [dispatch]);

  const handleApprove = async (vendorId: string) => {
    try {
      await dispatch(approveVendor(vendorId)).unwrap();
    } catch (error) {
      console.error('Failed to approve vendor:', error);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {pendingVendors.length === 0 ? (
        <EmptyState />
      ) : (
        <VendorList vendors={pendingVendors} onApprove={handleApprove} />
      )}
    </div>
  );
};

export default VendorApprovals;