import React from 'react';
import { Props } from './props';
import styles from './styles';
import Layout from '@src/components/layout';
import { FlatList } from 'react-native';
import DashboardCard from '@src/components/dashboardCard';
import { RouteName } from '@src/routes/routeName';

const data = [
  { title: 'Khảo Sát', icon: 'menu', screen: RouteName.QUIZ },
  { title: 'Tài Khoản', icon: 'person', screen: RouteName.ACCOUNT_SETTING }
];

const Home = (props: Props) => {
  return (
    <Layout main disableBack title={'Trang Chủ'}>
      <FlatList
        numColumns={2}
        data={data}
        key="dashboard"
        renderItem={({ item }) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            screen={item.screen}
          />
        )}
      />
    </Layout>
  );
};

export default Home;
