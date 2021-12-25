import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  icon: {
    position: 'absolute',
    fontSize: 24,
    right: 0,
    marginHorizontal: 8
  },
  checkIcon: {
    paddingTop: 12,
    paddingStart: 12,
    paddingEnd: 8,
    paddingBottom: 4,
    marginHorizontal: 0
  },
  iosPickerContainer: {
    flex: 1,
    backgroundColor: colors.transparent,
    justifyContent: 'flex-end'
  },
  iosPickerOutside: {
    flex: 1
  },
  iosPickerInside: {
    backgroundColor: 'white'
  }
});
