import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';
import variables from '@src/themes/variables';

export default StyleSheet.create({
  selected: {
    color: colors.white
  },
  unselected: {
    color: colors.blueGrey
  },
  selectedItem: {
    backgroundColor: colors.primary
  },
  unselectedItem: {
    backgroundColor: colors.transparent
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    borderRadius: variables.borderRadius
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  text: {
    flex: 1,
    fontSize: variables.fontSizeHeading4
  }
});
