import { TextInputProps } from 'react-native';
import { Props as TextFieldProps } from '@src/components/textField/props';

export type Props = { name?: string } & TextInputProps & TextFieldProps;
