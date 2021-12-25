import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@src/components/layout';
import { i18nKey } from '@src/locales/i18n';
import PasswordForm from './passwordForm/passwordForm';
import ProfileForm from './profileForm/profileForm';
import { Props } from './props';
import styles from './styles';

const AccountSetting = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Layout main title={i18nKey.account_setting}>
      <ProfileForm />
      <PasswordForm />
    </Layout>
  );
};

export default AccountSetting;
