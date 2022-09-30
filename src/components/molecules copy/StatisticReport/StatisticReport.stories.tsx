import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StatisticReport} from '.';

export default {
  title: 'Molecules/StatisticReport',
  component: StatisticReport,
} as ComponentMeta<typeof StatisticReport>;

const Template: ComponentStory<typeof StatisticReport> = (args) => <StatisticReport {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title : 'Reported Message',
  subTitle: '2,112',
  background: '#fff',
  borderRadius: '5px'
};
