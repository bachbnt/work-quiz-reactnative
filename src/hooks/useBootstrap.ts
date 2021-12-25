import { useEffect } from 'react';
import { reset } from '@src/routes/navigation';
import { RouteName } from '@src/routes/routeName';
import useAuth from './useAuth';

const useBootstrap = () => {
  const auth = useAuth();

  useEffect(() => {
    const bootstrap = async () => {
      if (await auth.isSignedIn()) {
        reset(RouteName.HOME);
      } else {
        reset(RouteName.SIGN_IN);
      }
    };
    bootstrap();
  }, [auth]);
};

export default useBootstrap;
