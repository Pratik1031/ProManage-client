import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Corrected initial state for isLoading
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password, confirmPassword) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/register`,
        { name, email, password, confirmPassword }
      );

      if (response.status !== 200) {
        setError(response.data.error);
        toast.error('Registration Failed', {
          duration: 4000,
          position: 'top-right',
        });
      } else {
        const data = response.data;
        localStorage.setItem('user', JSON.stringify(data));
        toast.success(`Registered Successfully! Welcome ${name}`, {
          duration: 4000,
          position: 'top-right',
        });
        dispatch({ type: 'LOGIN', payload: data });
      }
    } catch (error) {
      setError('An error occurred during registration');
      toast.error('An error occurred during registration', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
