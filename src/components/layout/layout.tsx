import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Container } from 'native-base';
import Header from '@src/components/header';
import { Props } from './props';
import styles from './styles';

const Layout = (props: Props) => {
  const {
    children,
    safeViewStyle,
    style,
    title,
    main,
    disableBack = false,
    menu
  } = props;

  return (
    <SafeAreaView style={[styles.safeView, safeViewStyle]}>
      <Container style={[styles.container, style]}>
        {!!main && (
          <Header menu={menu} disableBack={disableBack} title={title} />
        )}
        <ScrollView contentContainerStyle={styles.scrollView}>
          {children}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default Layout;
