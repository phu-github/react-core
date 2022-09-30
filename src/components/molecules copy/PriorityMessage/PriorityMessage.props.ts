export interface PriorityMessageProps{
    width?:string | number;
    height?: string | number;
    padding?:string | number;
    margin?: string | number;
    backgroundColor?: string;
    color?: string;
    onEditEvent?:() => void;
    titleMessage?: string;
    subTitle?:string;
    bodyMessage?:string;  
    border?: string | number;
    borderColor?: string | number;
    borderRadius?: number | string;
    btnWidth?: number | string;
    btnHeight?: number | string;
    btnMargin?: number | string;
}