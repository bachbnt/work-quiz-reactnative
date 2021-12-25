import colors from '@src/themes/colors';
import variables from '@src/themes/variables';
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  title: {
    fontSize: variables.fontSizeHeading3
  },
  card: {
    width: width * 0.4,
    height: width * 0.5,
    padding: 18,
    margin: width * 0.05,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: variables.borderRadius,
    backgroundColor: colors.white,
    shadowRadius: variables.borderRadius,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 2
  },
  icon: {
    color: colors.blueGrey,
    fontSize: 40
  }
});
