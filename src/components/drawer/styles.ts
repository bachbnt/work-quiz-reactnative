import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  safeView: {
    height: '100%',
    backgroundColor: colors.white,
    paddingVertical: 10
  },
  container: {
    alignItems: 'center'
  },
  appName: {
    fontWeight: 'bold',
    fontSize: variables.fontSizeHeading3,
    color: colors.primary,
    marginTop: 4
  },
  profile: {
    height: '15%',
    justifyContent: 'center'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: variables.fontSizeHeading2,
    marginHorizontal: 10
  },
  signOutButton: {
    alignSelf: 'center',
    marginVertical: 30,
    textTransform: 'uppercase'
  }
});
