import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  root: {
    minWidth: 120,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: variables.borderRadius
  }
});
