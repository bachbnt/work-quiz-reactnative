import React from 'react';
import { Image as NativeImage } from 'react-native';
import { Image } from '@src/constants/image';
import { Props } from './props';
import styles from './styles';

const Logo = (props: Props) => {
  const { style } = props;

  return <NativeImage source={Image.LOGO} style={[styles.logo, style]} />;
};

export default Logo;
