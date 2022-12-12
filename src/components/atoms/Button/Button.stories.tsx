import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';
import { action } from '@storybook/addon-actions';
import {Images} from '../../../configs/images';


export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const _1OnlyIcon = Template.bind({});
_1OnlyIcon.args = {
  variant: 'btn-icon',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
  imgVariant: 'img-icon'
};

export const _2IconWITHText = Template.bind({});
_2IconWITHText.args = {
    variant: 'btn-icon-text',
    linkIcon: Images.DashboardIcon,
    title: "Dashboard",
    onClick: action('on-click'),
    txtVariant: 'txt-icon-text',
    imgVariant: 'img-icon-text'
};

export const _3IconWITHTextANDIcon = Template.bind({});
_3IconWITHTextANDIcon.args = {
  variant: 'btn-sidebar',
  title: "Dashboard",
  onClick: action('on-click'),
  // Text
  txtVariant: '',
  //image 1
  linkIcon: Images.DashboardIcon,
  imgVariant: 'img-dashboard',
  //image 2
  linkIconPlus: Images.RightIcon,
  imgVariantPlus: 'img-arrow'
};

export const Search = Template.bind({});
Search.args = {
  variant: 'btn-search',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
  imgVariant: 'img-search'
};

export const MailBox = Template.bind({});
MailBox.args = {
  variant: 'btn-message',
  linkIcon: Images.MessageIcon,
  title: "0",
  onClick: action('on-click'),
  txtVariant: 'txt-message',
  imgVariant: 'img-message'
};

export const NotificationBox = Template.bind({});
NotificationBox.args = {
  variant: 'btn-bell-notify',
  linkIcon: Images.BellIcon,
  title: "0",
  onClick: action('on-click'),
  txtVariant: 'txt-bell-notify',
  imgVariant: 'img-bell-notify',
};

export const MutiLanguage = Template.bind({});
MutiLanguage.args = {
  variant: 'btn-language',
  linkIcon: Images.VnFlag,
  title: "",
  onClick: action('on-click'),
  imgVariant: ''
}

export const Logo = Template.bind({});
Logo.args = {
  variant: 'btn-logo',

  linkIcon: Images.Logo,
  imgVariant: 'img-logo',

  title: "Storybook",
  txtVariant: 'txt-logo',

  onClick: action('on-click'),
};

export const Menu = Template.bind({});
Menu.args = {
  variant: 'btn-menu',
  linkIcon: Images.Menu,
  onClick: action('on-click'),
  imgVariant: 'img-menu'
};