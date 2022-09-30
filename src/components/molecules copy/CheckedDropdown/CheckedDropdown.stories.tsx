import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CheckedDropdown} from '.';


export default {
  title: 'Molecules/CheckedDropdown',
  component: CheckedDropdown,
} as ComponentMeta<typeof CheckedDropdown>;

const Template: ComponentStory<typeof CheckedDropdown> = (args) => <CheckedDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
