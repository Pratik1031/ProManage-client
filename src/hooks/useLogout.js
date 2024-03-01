import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    toast.success(`Logout  Sucessfull`, {
      duration: 4000,
      position: 'top-right',
    });
  };
  return { logout };
};
