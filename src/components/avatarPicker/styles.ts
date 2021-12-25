import { StyleSheet } from 'react-native';
import colors from '@src/themes/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: colors.transparent
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.white
  },
  cameraIconContainer: {
    zIndex: 5,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    overflow: 'hidden'
  },
  cameraIcon: {
    color: colors.white
  },
  removeIconButton: {
    position: 'absolute',
    top: 2,
    right: -4,
    zIndex: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 0.5
  },
  removeIcon: {
    color: colors.primary,
    fontSize: 30
  }
});
