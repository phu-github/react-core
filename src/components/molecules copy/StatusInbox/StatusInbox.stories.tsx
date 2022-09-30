import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StatusInbox} from './index';


export default {
  title: 'Molecules/StatusInbox',
  component: StatusInbox,
} as ComponentMeta<typeof StatusInbox>;

const Template: ComponentStory<typeof StatusInbox> = (args) => <StatusInbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Notice of personal information processing. (This is not an advertisement)',
  color: '#B00020',
};
