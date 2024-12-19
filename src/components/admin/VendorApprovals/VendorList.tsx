import React from 'react';
import { VendorProfile } from '../../../types/vendor';
import VendorCard from './VendorCard';

interface VendorListProps {
  vendors: VendorProfile[];
  onApprove: (vendorId: string) => void;
}

const VendorList: React.FC<VendorListProps> = ({ vendors, onApprove }) => (
  <div className="divide-y divide-gray-200">
    {vendors.map(vendor => (
      <VendorCard
        key={vendor._id}
        vendor={vendor}
        onApprove={onApprove}
      />
    ))}
  </div>
);

export default VendorList;