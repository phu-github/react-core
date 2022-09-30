import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UserProfile} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/UserProfile',
  component: UserProfile,
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
