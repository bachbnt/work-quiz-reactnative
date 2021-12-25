import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    marginHorizontal: -5,
    paddingHorizontal: -5
  },
  inputContainer: {
    width: '100%',
    paddingLeft: 0,
    paddingRight: 10
  },
  error: {
    color: colors.error,
    marginHorizontal: 2,
    marginVertical: 6,
    fontSize: variables.fontSize,
    alignSelf: 'flex-start'
  },
  icon: {
    marginLeft: 5,
    marginRight: -10
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});
