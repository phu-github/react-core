import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchFilter } from '.';
import { Images } from '../../../configs/images'
import { Colors } from '../../../configs/colors'

export default {
  title: 'Molecules/SearchFilter',
  component: SearchFilter,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => <SearchFilter {...args} />;

export const SearchFilterWithIcon = Template.bind({});
SearchFilterWithIcon.args = {
  height: 40,
  widthTextInput: 240,
  titleInput: 'Search by keywords',
  borderColor: Colors.BorderColor,
  iconSrc: Images.SearchFilter || "",
  borderRadius: '4px',
  cssClass: ''
};

export const SearchFilterWithoutIcon = Template.bind({});
SearchFilterWithoutIcon.args = {
  height: 40,
  widthTextInput: 240,
  titleInput: 'Search by keywords',
  borderColor: Colors.BorderColor,
  iconSrc: "",
  borderRadius: '4px',
  cssClass: 'without-icon'
};

