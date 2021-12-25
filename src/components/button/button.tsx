import React from 'react';
import { Button as NativeButton } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import styles from './styles';

const Button = (props: Props) => {
  const { children, style, ...others } = props;
  const { t } = useTranslation();

  return (
    <NativeButton style={[styles.root, style]} {...others}>
      {children}
    </NativeButton>
  );
};

export default Button;
