import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@src/components/layout';
import Logo from '@src/components/logo';
import useBootstrap from '@src/hooks/useBootstrap';
import { Props } from './props';
import styles from './styles';

const Splash = (props: Props) => {
  const { t } = useTranslation();

  useBootstrap();

  return (
    <Layout>
      <Logo style={styles.logo} />
    </Layout>
  );
};

export default Splash;
