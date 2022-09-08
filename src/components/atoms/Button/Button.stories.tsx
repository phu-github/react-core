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

export const ButtonIconDefault = Template.bind({});
ButtonIconDefault.args = {
  variant: 'btn-icon',
  linkIcon: Images.SearchIcon,
  title: "",
  onClick: action('on-click'),
  imgVariant: 'img-icon'
};

export const ButtonIconTextDefault = Template.bind({});
ButtonIconTextDefault.args = {
    variant: 'btn-icon-text',
    linkIcon: Images.DashboardIcon,
    title: "Dashboard",
    onClick: action('on-click'),
    txtVariant: 'txt-icon-text',
    imgVariant: 'img-icon-text'
};

export const ButtonSearch = Template.bind({});
ButtonSearch.args = {
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