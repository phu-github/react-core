export interface SearchFilterProps {
  widthTextInput?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  borderColor?: string;
  borderRadius?: string;
  titleInput?: string;
  iconSrc?: string;
  cssClass?: string;
  onSearchEvent?: (value?:any) => void;
  handleKeyDownEvent?: (event?:any) => void;
}
