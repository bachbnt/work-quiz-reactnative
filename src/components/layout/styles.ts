import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';

export default StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    backgroundColor: colors.transparent
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});
