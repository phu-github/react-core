import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {LeftNavButton} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/Content/LeftNavButton',
  component: LeftNavButton,
} as ComponentMeta<typeof LeftNavButton>;

const Template: ComponentStory<typeof LeftNavButton> = (args) => <LeftNavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftNavBtnArr : [
    {
      name: 'Dashboard',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: 'null'
    },
    {
      name: 'Inbox',
      linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
      activeObject: 'null'
    },
    { 
      name: 'Actions',
      linkIcon: Images.Book || 'https://picsum.photos/19',
      activeObject: 'null'

    },
    {
      name: 'Reports',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: 'null'
    }
  ]
};
