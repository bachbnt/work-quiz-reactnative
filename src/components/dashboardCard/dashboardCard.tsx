import React from 'react';
import { Text, View } from 'native-base';
import Icon from '@src/components/icon';
import { Props } from './props';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { navigate } from '@src/routes/navigation';

const DashboardCard = (props: Props) => {
  const { title, icon, screen, style } = props;

  const onPress = () => {
    navigate(screen);
  };

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
