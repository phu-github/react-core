import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Brand } from '.';
import { Images } from "../../../configs/images";

export default {
    title: 'Molecules/Nav/Brand',
    component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Brandstorybook = Template.bind({});
Brandstorybook.args = {
    mLinkIcon: Images.SearchIcon
};
