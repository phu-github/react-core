import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckInput } from '.';

export default {
  title: 'atoms/CheckInput',
  component: CheckInput,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof CheckInput>;

const Template: ComponentStory<typeof CheckInput> = (args) => <CheckInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content :'auto test'
};

