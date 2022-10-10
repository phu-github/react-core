import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from '.';
import { Images } from "../../../configs/images";

export default {
    title: 'Molecules/Nav',
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const searchbar = Template.bind({});
searchbar.args = {
    mVariant: 'm-search-bar',
    mLinkIcon: Images.SearchIcon
};
