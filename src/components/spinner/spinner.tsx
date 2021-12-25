import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/rootState';
import { SpinnerState } from '@src/redux/spinner/spinnerState';
import colors from '@src/themes/colors';
import { Props } from './props';
import styles from './styles';

const Spinner = (props: Props) => {
  const spinnerReducer = useSelector<RootState, SpinnerState>(
    (state) => state.spinnerReducer
  );

  if (!props.visible && !spinnerReducer.visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Spinner;
