import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DashBoardSearch } from '.';

export default {
  title: 'organisms/ReportChartGroup',
  component: DashBoardSearch,
} as ComponentMeta<typeof DashBoardSearch>;

const Template: ComponentStory<typeof DashBoardSearch> = (args) => <DashBoardSearch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
