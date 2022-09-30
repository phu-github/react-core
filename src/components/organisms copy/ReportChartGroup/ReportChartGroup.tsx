import React from 'react';
import {ReportChartGroupProps} from './ReportChartGroup.props';
import {ReportChart} from '../../molecules/ReportChart';
import './ReportChartGroup.styles.css';

export const ReportChartGroup: React.FC<ReportChartGroupProps> = ({
  reportChartArr
}) => {
  return (
    <div className="report-chart-group">
      {
        reportChartArr?.map( (reportChart: any, index) =>
          <ReportChart
            key={index}
            chartTitle={reportChart.chartTitle}
            optionsChart={reportChart.optionsChart}
            typeChart={reportChart.typeChart}
            seriesChart={reportChart.seriesChart}
            heightChart={reportChart.heightChart}
            widthChart={reportChart.widthChart}
            heightChartContainer={reportChart.heightChartContainer}
          />)

      }
    </div>
  );
};
