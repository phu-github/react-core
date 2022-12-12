import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropDownList } from './index';


export default {
  title: 'Atoms/DropDownList',
  component: DropDownList,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof DropDownList>;

const Template: ComponentStory<typeof DropDownList> = (args) => <DropDownList {...args} />

export const DropdownListPrimary = Template.bind({});
DropdownListPrimary.args = {
  width: '20px',
  height: '20px',
  border: '1px solid',
  disabled: true,
  borderRadius: '4px',
  labelTitle: 'Status',
  selectedTitle: 'All',
  variant: '', //checkbox
  data: [
      {
    id: 1,
    content: 'Status'
  },
    {
      id: 2,
      content: 'Priority'
    },
    {
      id: 3,
      content: 'Category'
    },
  ]
};

export const BlueDropdownListPrimary = Template.bind({});
BlueDropdownListPrimary.args = {
  width: '20px',
  height: '20px',
  border: '1px solid',
  disabled: true,
  borderRadius: '4px',
  labelTitle: '',
  selectedTitle: 'NAB - National Autralia Bank',
  variant: '', //checkbox
  variantDropdown: 'blue-dropdown',
  data: [
    {
      id: 1,
      content: 'NAB - National Autralia Bank'
    },
    {
      id: 2,
      content: 'NAB - National Autralia Bank 2'
    },
    {
      id: 3,
      content: 'NAB - National Autralia Bank 3'
    },
  ]
};

export const ActionDropdownListPrimary = Template.bind({});
ActionDropdownListPrimary.args = {
  width: '116px',
  height: '40px',
  border: '1px solid',
  disabled: true,
  borderRadius: '4px',
  labelTitle: '',
  selectedTitle: 'Actions',
  variant: '', //checkbox
  variantDropdown: 'actions-dropdown',
  data: [
    {
      id: 1,
      content: 'Delete'
    }
  ]
};
