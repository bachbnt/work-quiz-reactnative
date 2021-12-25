import variables from '@src/themes/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
  body: {
    flex: 6
  },
  label: {
    fontSize: variables.fontSizeHeading3
  },
  subLabel: {
    fontSize: variables.fontSizeHeading4,
    fontWeight: 'bold'
  }
});
