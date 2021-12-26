import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  children: Element;
  title?: string;
  main?: boolean;
  disableBack?: boolean;
  style?: StyleProp<ViewStyle>;
  safeViewStyle?: StyleProp<ViewStyle>;
  menu?: boolean;
}
