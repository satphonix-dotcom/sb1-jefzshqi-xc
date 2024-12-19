import React from 'react';
import RegisterForm from './RegisterForm';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;