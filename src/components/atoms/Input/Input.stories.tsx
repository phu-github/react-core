import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './index';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 200,
  height: 21,
  fontWeight: '300',
  fontSize: '0.88rem',
  color: 'black',
  backgroundColor: 'transparent',
  type: 'text',
  name: 'name-default',
  padding: '0 5px',
  margin: '0',
  border: '1px solid black',
  borderRadius: 'none',  
  placeholder: 'Enter here ..',

};

export const Searchbar = Template.bind({});
Searchbar.args = {
  width: 200,
  height: 21,
  fontWeight: 300,
  fontSize: '0.88rem',
  color: 'black',
  type: 'text',
  name: 'btn-search',
  padding: '0 5px',
  margin: '0',
  border: 'none',
  borderRadius: 'none',  
  placeholder: 'Enter here ..',
};