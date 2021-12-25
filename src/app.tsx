import React from 'react';
import { LogBox } from 'react-native';
import { Drawer as NativeDrawer, Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Drawer from './components/drawer';
import Spinner from './components/spinner';
import useAuth, { AuthContext } from './hooks/useAuth';
import { store } from './redux/store';
import MainNavigator from './routes/mainNavigator';
import { drawerRef, navigatorRef } from './routes/navigation';

const App = () => {
  LogBox.ignoreAllLogs();
  const auth = useAuth();

  return (
    <Root>
      <Provider store={store}>
        <AuthContext.Provider value={auth}>
          <NavigationContainer ref={navigatorRef}>
            <NativeDrawer
              ref={drawerRef}
              type="displace"
              openDrawerOffset={0.2}
              content={<Drawer />}>
              <MainNavigator />
            </NativeDrawer>
          </NavigationContainer>
        </AuthContext.Provider>
        <Spinner />
      </Provider>
    </Root>
  );
};

export default App;
