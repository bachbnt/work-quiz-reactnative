import React from 'react';
import { Thumbnail } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Image } from '@src/constants/image';
import { Props } from './props';
import styles from './styles';

const Avatar = (props: Props) => {
  const { image, ...others } = props;
  const { t } = useTranslation();

  return (
    <Thumbnail
      {...others}
      source={
        image
          ? {
              uri: image
            }
          : Image.LAUNCHER
      }
    />
  );
};

export default Avatar;
