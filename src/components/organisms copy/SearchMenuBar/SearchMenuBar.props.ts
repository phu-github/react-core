export interface SearchMenuBarProps {
    backgroundColor?: string | number;
    width?: string | number;
    height?: string | number;
    margin?: string | number;
    onFilter?: (params?:any) => void;
    handleEnterSearch?: (event?:any) => void;
}
