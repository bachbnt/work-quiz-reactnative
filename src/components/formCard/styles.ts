import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '5%',
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderRadius: variables.borderRadius,
    backgroundColor: colors.white,
    shadowRadius: variables.borderRadius,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 2
  },
  backButton: {
    alignSelf: 'flex-start',
    color: colors.primary,
    marginBottom: 36
  },
  title: {
    color: colors.primary,
    fontSize: variables.fontSizeHeading1,
    fontWeight: 'bold',
    marginBottom: 36
  }
});
