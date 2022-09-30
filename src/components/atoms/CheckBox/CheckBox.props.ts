import {ReactNode} from 'react';

export interface CheckBoxProps {
  id?: any,
  width?: string | number;
  height?: string | number;
  border?: string;
  borderRadius?: string;
  disabled?: boolean;
  checked?: boolean;
  value?:string;
  onChange?: () => void;
}
