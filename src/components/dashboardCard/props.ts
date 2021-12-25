import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  title: string;
  icon: string;
  screen: string;
  style?: StyleProp<ViewStyle>;
}
