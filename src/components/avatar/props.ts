import { ImageStyle, StyleProp } from 'react-native';

export interface Props {
  image?: string;
  style?: StyleProp<ImageStyle>;
  large?: boolean;
  small?: boolean;
  circular?: boolean;
  square?: boolean;
}
