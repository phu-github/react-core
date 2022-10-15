import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Header} from './index';
import {SideBar} from "../../molecules/Sidebar";
import {Images} from "../../../configs/images";

export default {
    title: 'Organisms/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
    mVariant: 'o-header',
};
