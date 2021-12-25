import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import Icon from '@src/components/icon';
import { Props } from './props';
import styles from './styles';

const ListItem = (props: Props) => {
  const { left, right, title, selected, onPress } = props;

  const { t } = useTranslation();

  return selected ? (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, styles.selectedItem]}>
        {left && (
          <Icon name={left} style={[styles.leftIcon, styles.selected]} />
        )}
        <Text style={[styles.text, styles.selected]}>
          {startCase(t(title))}
        </Text>
        {right && (
          <Icon name={right} style={[styles.rightIcon, styles.selected]} />
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, styles.unselectedItem]}>
        {left && (
          <Icon name={left} style={[styles.leftIcon, styles.unselected]} />
        )}
        <Text style={[styles.text, styles.unselected]}>
          {startCase(t(title))}
        </Text>
        {right && (
          <Icon name={right} style={[styles.rightIcon, styles.unselected]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
