import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {LeftNavButton} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/LeftNavButton',
  component: LeftNavButton,
} as ComponentMeta<typeof LeftNavButton>;

const Template: ComponentStory<typeof LeftNavButton> = (args) => <LeftNavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftNavBtnArr : [
    {
      name: 'Dashboard',
      linkIcon: Images.DashboardIcon || 'https://picsum.photos/19'
    },
    {
      name: 'Inbox',
      linkIcon: Images.InboxIcon || 'https://picsum.photos/19'
    },
    {
      name: 'Actions',
      linkIcon: Images.ActionIcon || 'https://picsum.photos/19'
    },
    {
      name: 'Reports',
      linkIcon: Images.ReportIcon || 'https://picsum.photos/19'
    }
  ]
};
