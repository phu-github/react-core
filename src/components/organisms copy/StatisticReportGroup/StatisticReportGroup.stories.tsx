import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StatisticReportGroup} from '.';

export default {
  title: 'organisms/StatisticReportGroupProps',
  component: StatisticReportGroup,
} as ComponentMeta<typeof StatisticReportGroup>;

const Template: ComponentStory<typeof StatisticReportGroup> = (args) => <StatisticReportGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  statisticArr : [
    {
      title: 'Reported',
      subTitle: '2,112',
      color: '#1a3141'
    },
    {
      title: 'Automatically Resolved',
      subTitle: '1,302',
      color: '#7ad699'
    },
    {
      title: 'Manually Resolved',
      subTitle: '762',
      color: '#75bfd2'
    },
    {
      title: 'UnResolved',
      subTitle: '47',
      color: '#8e8e8e'
    }
  ]
};
