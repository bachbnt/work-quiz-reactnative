import React from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import { Props } from './props';
import styles from './styles';

const Link = (props: Props) => {
  const { title, onPress, style } = props;
  const { t } = useTranslation();

  return (
    <Text style={[styles.root, style]} onPress={onPress}>
      {title}
    </Text>
  );
};

export default Link;
