import React from 'react';
import {StatisticReportProps} from './StatisticReport.props';
import {Text} from '../../atoms/Text';
import './StatisticReport.styles.css';

export const StatisticReport: React.FC<StatisticReportProps> = ({
  background= '#fff',
  borderRadius= '5px',
  color,
  title,
  subTitle
}) => {
  return (
    <div className="statistic-section" style={{backgroundColor: background, borderRadius}}>
      <Text cssClass={'title'} children={title} fontSize={16} color={'#808080'} margin='24px 0 14px 0'/>
      <Text children={subTitle} fontWeight={700} fontSize={32} color={color} margin='0 0 18px'/>
    </div>
  );
};
