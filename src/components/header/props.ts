import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Props {
  leftPress?: () => void;
  rightPress?: () => void;
  leftIcon?: string;
  leftIconStyle?: StyleProp<TextStyle>;
  rightIcon?: string;
  rightIconStyle?: StyleProp<TextStyle>;
  title?: string;
  disableBack?: boolean;
  searchBar?: boolean;
  onSearch?: (text: string) => void;
  renderRight?: () => ReactNode;
  style?: StyleProp<ViewStyle>;
  menu?: boolean;
}
