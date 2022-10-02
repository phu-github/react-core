export interface TextareaProps{
    cols?: number;
    rows?: number;
    isDisable?: boolean;
    value?:any
    className?:object|string;
    onChange?:(event?:any) => void
    backgroundColor?: string;
    borderColor?:string;
    color?:string;
    width?:number | string;
    height?:number |string;
    margin?: number | string;
    padding?: number | string;
    fontSize?: number | string;
    fontFamily?: string;
    children?: string
}