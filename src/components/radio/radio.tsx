import React from 'react';
import {
  Body,
  Left,
  ListItem,
  Radio as NativeRadio,
  Right,
  Text
} from 'native-base';
import { Props } from './props';
import styles from './styles';

const Radio = (props: Props) => {
  const { selected, label, subLabel, onPress, ...others } = props;

  return (
    <ListItem onPress={onPress}>
      <Left style={styles.left}>
        <NativeRadio selected={selected} {...others} />
      </Left>
      <Body style={styles.body}>
        <Text style={styles.label}>{label}</Text>
      </Body>
      <Right style={styles.right}>
        {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
      </Right>
    </ListItem>
  );
};

export default Radio;
