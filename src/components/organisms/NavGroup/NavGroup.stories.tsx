import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavGroup } from '.';
import { Images } from "../../../configs/images";

export default {
    title: 'Organisms/NavGroup',
    component: NavGroup,
} as ComponentMeta<typeof NavGroup>;

const Template: ComponentStory<typeof NavGroup> = (args) => <NavGroup {...args} />;

export const navgroup = Template.bind({});
navgroup.args = {

};
