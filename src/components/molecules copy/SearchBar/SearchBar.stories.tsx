import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from '.';
import { Images } from '../../../configs/images'

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: 48,
  widthTextInput: 250,
  widthButton : 60,
  titleInput: 'Search ....'
};

