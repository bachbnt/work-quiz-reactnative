import { NativeBase } from 'native-base';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props extends NativeBase.Button {
  children: Element;
  style?: StyleProp<ViewStyle>;
}
