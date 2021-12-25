import React, { useMemo } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import { publics, privates } from './routeProps';

const MainNavigator = () => {
  const screenOptions = useMemo(
    () => ({
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }),
    []
  );

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator mode="card" screenOptions={screenOptions}>
      {publics.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
      {privates.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;
