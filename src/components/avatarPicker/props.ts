import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  image?: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (file: FileFormData) => void;
}

export interface FileFormData {
  name?: string;
  type: string;
  uri: string;
}
