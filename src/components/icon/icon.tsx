import React from 'react';
import { Icon as NativeIcon } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import styles from './styles';

const Icon = (props: Props) => {
  const { t } = useTranslation();

  return <NativeIcon type="MaterialIcons" {...props} />;
};

export default Icon;
