import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: variables.headerHeight
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: variables.fontSizeHeading2,
    color: colors.black,
    fontWeight: 'bold'
  },
  left: {
    flex: 1
  },
  leftHasSearch: {
    flex: 0,
    marginRight: 8
  },
  leftButton: {
    marginLeft: 10
  },
  rightButton: {
    marginRight: 10
  },
  right: {
    flex: 1
  },
  rightHasSearch: {
    flex: 0
  },
  icon: {
    color: colors.blueGrey
  },
  logoHeader: {
    width: '40%',
    height: '100%'
  },
  viewBody: {
    justifyContent: 'center'
  }
});
