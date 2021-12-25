import React, { useCallback, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import ImagePicker, { ImageLibraryOptions } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import Avatar from '@src/components/avatar';
import Icon from '@src/components/icon';
import { Props } from './props';
import styles from './styles';

const AvatarPicker = (props: Props) => {
  const { image, style, onChange } = props;
  const { t } = useTranslation();

  const [currentImage, setCurrentImage] = useState(image);

  const options: ImageLibraryOptions = useMemo(
    () => ({
      title: t('Select Avatar'),
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1
    }),
    [t]
  );

  const selectImage = useCallback(async () => {
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        return;
      }

      // const {fileName, type = '', uri} = response.assets;

      // setCurrentImage({uri});
      // onChange({
      //   type,
      //   uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
      //   name: fileName,
      // });
    });
  }, [options]);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={selectImage}>
        <Avatar image={currentImage} style={styles.avatar} />

        <View style={styles.cameraIconContainer}>
          <Icon name="photo-camera" style={styles.cameraIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeIconButton}>
        <Icon name="cancel" style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarPicker;
