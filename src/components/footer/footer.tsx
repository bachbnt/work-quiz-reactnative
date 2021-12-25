import React from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Config } from '@src/configs/config';
import { i18nKey } from '@src/locales/i18n';
import { Props } from './props';
import styles from './styles';

const Footer = (props: Props) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>
        {t(i18nKey.copyright_by, {
          year: new Date().getFullYear(),
          author: Config.APP_AUTHOR
        })}
      </Text>
    </View>
  );
};

export default Footer;
