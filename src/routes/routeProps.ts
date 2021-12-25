import { ComponentType } from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { RouteName } from './routeName';

export interface RouteProps {
  name: string;
  component: ComponentType<any>;
  options?: StackNavigationOptions;
}

export const publics: RouteProps[] = [
  {
    name: RouteName.SPLASH,
    component: require('@src/screens/splash').default,
    options: {
      header: () => null
    }
  },
  {
    name: RouteName.SIGN_IN,
    component: require('@src/screens/signIn').default,
    options: {
      header: () => null
    }
  },
  {
    name: RouteName.SIGN_UP,
    component: require('@src/screens/signUp').default,
    options: {
      header: () => null
    }
  },
  {
    name: RouteName.FORGOT_PASSWORD,
    component: require('@src/screens/forgotPassword').default,
    options: {
      header: () => null
    }
  }
];

export const privates: RouteProps[] = [
  {
    name: RouteName.HOME,
    component: require('@src/screens/home').default,
    options: {
      header: () => null
    }
  },
  {
    name: RouteName.ACCOUNT_SETTING,
    component: require('@src/screens/accountSetting').default,
    options: {
      header: () => null
    }
  },
  {
    name: RouteName.QUIZ,
    component: require('@src/screens/quiz').default,
    options: {
      header: () => null
    }
  }
];
