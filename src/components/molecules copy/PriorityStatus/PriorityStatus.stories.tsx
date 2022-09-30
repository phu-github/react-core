import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {PriorityStatus} from '.';


export default {
  title: 'Molecules/UserProfile',
  component: PriorityStatus,
} as ComponentMeta<typeof PriorityStatus>;

const Template: ComponentStory<typeof PriorityStatus> = (args) => <PriorityStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
