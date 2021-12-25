import { createContext, useContext } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext(authService);

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
