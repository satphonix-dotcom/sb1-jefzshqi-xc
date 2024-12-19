import React from 'react';
import { VendorProfile } from '../../../types/vendor';
import { formatDate } from '../../../utils/formatters';

interface VendorCardProps {
  vendor: VendorProfile;
  onApprove: (vendorId: string) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onApprove }) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{vendor.businessName}</h3>
          <p className="text-sm text-gray-500">Applied: {formatDate(vendor.createdAt)}</p>
        </div>
        <button
          onClick={() => onApprove(vendor._id)}
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Approve
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Contact</h4>
          <p className="mt-1">{vendor.phoneNumber}</p>
          {vendor.website && (
            <a 
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-dark"
            >
              {vendor.website}
            </a>
          )}
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Business Details</h4>
          <p className="mt-1">{vendor.businessAddress}</p>
          <p className="text-sm text-gray-500">Tax ID: {vendor.taxId}</p>
        </div>
      </div>
      {vendor.description && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-500">Description</h4>
          <p className="mt-1 text-sm text-gray-600">{vendor.description}</p>
        </div>
      )}
    </div>
  );
};

export default VendorCard;