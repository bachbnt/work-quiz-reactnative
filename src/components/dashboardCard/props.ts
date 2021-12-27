import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  title: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
