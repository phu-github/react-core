import {ReactNode} from 'react';

export interface DropDownListProps {
  width?: string | number;
  height?: string | number;
  border?: string;
  margin?: string | number;
  borderRadius?: string;
  disabled?: boolean;
  labelTitle?: string,
  selectedTitle?: string,
  variant?: string,
  variantDropdown?: string,
  children?: string | ReactNode,
  data?: Array<any>;
  onClick?: () => void;
  onSelectItem?: (value?:any, type?:any) => void;
  onSelectActions?: (value?:any) => void;
  itemSelected?: string;
}
