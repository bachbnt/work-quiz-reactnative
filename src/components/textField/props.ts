import { RnViewStyleProp, NativeBase } from 'native-base';

export interface Props extends NativeBase.Input {
  password?: boolean;
  error?: string;
  style?: RnViewStyleProp | Array<RnViewStyleProp>;
  inputStyle?: RnViewStyleProp | Array<RnViewStyleProp>;
  inputContainerStyle?: RnViewStyleProp | Array<RnViewStyleProp>;
}
