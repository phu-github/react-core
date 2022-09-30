import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconStatus } from '.';

export default {
  title: 'Atoms/IconStatus',
  component: IconStatus,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof IconStatus>;

const Template: ComponentStory<typeof IconStatus> = (args) => <IconStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: '#B00020',
};


