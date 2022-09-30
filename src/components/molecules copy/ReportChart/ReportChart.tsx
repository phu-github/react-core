import React from 'react';
import { ReportChartProps } from './ReportChart.props';
import ReactApexChart from 'react-apexcharts';
import './Reportchart.styles.css';
import { Text } from '../../atoms/Text';

export const ReportChart: React.FC<ReportChartProps> = ({
  chartTitle,
  seriesChart,
  optionsChart,
  typeChart,
  heightChart,
  widthChart,
  heightChartContainer
}) => {
  return (
    <div className={`${typeChart}` + ' report-chart-wrapper'}>
      <Text children={chartTitle} fontSize={22} fontWeight='bold' color='#011111'/>
      <div className={'report-chart'} style={{height: heightChartContainer}}>
        {
          // @ts-ignore
          <ReactApexChart options={optionsChart} series={seriesChart} type={typeChart} height={heightChart} width={widthChart}/>
        }
      </div>
    </div>
  );
};
