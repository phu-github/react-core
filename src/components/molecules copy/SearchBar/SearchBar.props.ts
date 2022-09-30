import {ReactNode} from 'react';

export interface SearchBarProps {
  widthTextInput?: string | number;
  widthButton?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  titleInput?: string;
  onSearchEvent?: () => void;
}
