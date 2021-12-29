import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { List, ListItem as NativeListItem, Text, View } from 'native-base';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { upperCase } from 'lodash';
import Avatar from '@src/components/avatar';
import Button from '@src/components/button';
import CurrentDateTime from '@src/components/currentDateTime';
import Footer from '@src/components/footer';
import ListItem from '@src/components/listItem';
import { Config } from '@src/configs/config';
import useSignOut from '@src/hooks/useSignOut';
import { i18nKey } from '@src/locales/i18n';
import { RootState } from '@src/redux/rootState';
import { closeDrawer, reset } from '@src/routes/navigation';
import { RouteName } from '@src/routes/routeName';
import { Props, DrawerRoute } from './props';
import styles from './styles';

const routes: DrawerRoute[] = [
  { title: i18nKey.dashboard, icon: 'dashboard', name: RouteName.HOME },
  {
    title: i18nKey.account_setting,
    icon: 'person',
    name: RouteName.ACCOUNT_SETTING
  }
];

const Drawer = (props: Props) => {
  const { t } = useTranslation();

  const { signOut } = useSignOut();

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const [currentRoute, setCurrentRoute] = useState(RouteName.HOME);

  const handleNavigate = (route: RouteName) => {
    setCurrentRoute(route);
    closeDrawer();
    reset(route);
  };

  const handleSignOut = async () => {
    setCurrentRoute(RouteName.HOME);
    closeDrawer();
    await signOut();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <CurrentDateTime />
        <Text style={styles.appName} numberOfLines={1}>
          {Config.APP_NAME}
        </Text>
      </View>

      <Button style={styles.signOutButton} onPress={handleSignOut}>
        <Text>{upperCase(t(i18nKey.sign_out))}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Drawer;
