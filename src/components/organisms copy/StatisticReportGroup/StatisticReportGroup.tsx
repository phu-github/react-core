import React from 'react';
import {StatisticReportGroupProps} from './StatisticReportGroup.props';
import {StatisticReport} from '../../molecules/StatisticReport';
import './StatisticReportGroup.styles.css';

export const StatisticReportGroup: React.FC<StatisticReportGroupProps> = ({
  statisticArr
}) => {
  return (
    <div className="statistic-section-group">
      {
        statisticArr?.map((statistic:any, index) => <StatisticReport key={index} title={statistic.title} subTitle={statistic.subTitle} color={statistic.color}/>)
      }
    </div>
  );
};
