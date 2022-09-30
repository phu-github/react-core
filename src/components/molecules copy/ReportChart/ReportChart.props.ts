export interface ReportChartProps {
    chartTitle?: string;
    seriesChart?: any;
    optionsChart: object;
    typeChart?: "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar" ;
    widthChart?: string | number;
    heightChart?: string | number;
    heightChartContainer?: string | number;
}




