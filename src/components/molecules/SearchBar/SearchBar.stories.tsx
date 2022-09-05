import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from '.';
import { Images } from "../../../configs/images";

export default {
    title: 'Molecules/Menu/SearchBar',
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const MenuSearchBar = Template.bind({});
MenuSearchBar.args = {
    mLinkIcon: Images.SearchIcon
};
