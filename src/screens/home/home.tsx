import React from 'react';
import { Props } from './props';
import styles from './styles';
import Layout from '@src/components/layout';
import { FlatList } from 'react-native';
import DashboardCard from '@src/components/dashboardCard';
import { RouteName } from '@src/routes/routeName';
import { navigate } from '@src/routes/navigation';

const data = [
  { title: 'Khảo Sát', icon: 'menu', screen: RouteName.QUIZ },
  { title: 'Tài Khoản', icon: 'person', screen: RouteName.ACCOUNT_SETTING }
];

const Home = (props: Props) => {
  const handlePress = (screen: string) => {
    if (screen === RouteName.QUIZ) {
      navigate(screen, { type: 1 });
    } else {
      navigate(screen);
    }
  };

  return (
    <Layout main menu title={'Trang Chủ'}>
      <FlatList
        numColumns={2}
        data={data}
        key="dashboard"
        renderItem={({ item }) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            onPress={() => {
              handlePress(item.screen);
            }}
          />
        )}
      />
    </Layout>
  );
};

export default Home;
