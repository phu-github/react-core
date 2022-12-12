import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Breadcrumb} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navigationLinks : [
    {
      name: 'Dashboard',
      href: '/dashboard'
    }
  ]
};
