import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/login`,
        { email, password }
      );

      if (response.status !== 200) {
        setError(response.data.error);
        toast.error('Login Failed', {
          duration: 4000,
          position: 'top-right',
        });
      } else {
        const data = response.data;
        localStorage.setItem('user', JSON.stringify(data));
        toast.success(`Login Sucessful`, {
          duration: 4000,
          position: 'top-right',
        });
        dispatch({ type: 'LOGIN', payload: data });
      }
    } catch (error) {
      setError('An error occurred during login');
      toast.error('An error occurred during login', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
