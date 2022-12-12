export interface CheckInputProps {
  id?: any;
  content?: string;
  width?:  string | number;
  height?: string | number;
  margin?: string | number;
  isChecked?: boolean;
  value?: string;
  onChange?: (e?:any) => void;
}
