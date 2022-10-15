import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Brand } from '.';

export default {
    title: 'Molecules/Nav',
    component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Brandstorybook = Template.bind({});
Brandstorybook.args = {
    mVariant: 'm-brand',
};
