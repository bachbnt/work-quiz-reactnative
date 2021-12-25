import React, { useState } from 'react';
import { Icon, Input, Item, Label, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import themeStyles from '@src/themes/styles';
import { Props } from './props';
import styles from './styles';

const TextField = (props: Props) => {
  const {
    password,
    error = '',
    style,
    inputStyle,
    inputContainerStyle,
    label,
    placeholder,
    disabled,
    ...others
  } = props;
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const handleClickEye = () => {
    setVisible(!visible);
  };

  return (
    <View style={[styles.container, style]}>
      <Item
        floatingLabel
        disabled={disabled}
        style={[styles.inputContainer, inputContainerStyle]}>
        {!!label && <Label>{startCase(label)}</Label>}
        <Input
          disabled={disabled}
          autoCapitalize="none"
          placeholder={startCase(placeholder)}
          secureTextEntry={password ? !visible : false}
          {...others}
          style={[styles.input, inputStyle]}
        />
        {password && (
          <Icon
            style={[themeStyles.icon, styles.icon]}
            onPress={handleClickEye}
            name={visible ? 'eye' : 'eye-off'}
          />
        )}
      </Item>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default TextField;
