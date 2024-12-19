import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
  </div>
);

export default LoadingSpinner;