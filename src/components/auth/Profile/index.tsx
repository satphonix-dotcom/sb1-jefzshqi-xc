import React from 'react';
import { useAuth } from '../../../hooks';
import ProfileForm from './ProfileForm';
import LoadingSpinner from '../../common/LoadingSpinner';

const Profile: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;