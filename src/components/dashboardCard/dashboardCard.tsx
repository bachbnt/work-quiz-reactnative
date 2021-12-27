import React from 'react';
import { Text, View } from 'native-base';
import Icon from '@src/components/icon';
import { Props } from './props';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

const DashboardCard = (props: Props) => {
  const { title, icon, style, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, style]}>
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;
