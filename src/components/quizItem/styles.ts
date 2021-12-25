import variables from '@src/themes/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: variables.fontSizeHeading3,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginVertical: 8
  },
  container: {
    paddingHorizontal: 4,
    paddingVertical: 16,
    borderTopWidth: 0.5,
    marginBottom: 12
  }
});
