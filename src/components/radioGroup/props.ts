export interface Props {
  mapLabel?: (item: any) => string;
  mapSubLabel?: (item: any) => string;
  mapValue: (item: any) => any;
  options: any[] | (() => Promise<any[]>);
  defaultValue: any;
  onValueChanged?: (value: any) => void;
  disable?: boolean;
  showPoint?: boolean;
}
