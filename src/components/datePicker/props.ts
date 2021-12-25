import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  label?: string;
  placeholder?: string;
  value?: Date;
  mode?: 'date' | 'time';
  formatter?: (date: Date) => string;
  onChange?: (event: Event, date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  error?: string;
  style?: StyleProp<ViewStyle>;
}
