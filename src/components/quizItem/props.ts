export interface Props {
  item: any;
  disable?: boolean;
  onValueChanged?: (questionId: any, answerId: any) => void;
  showPoint?: boolean;
}
