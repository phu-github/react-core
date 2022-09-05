import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Image} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    backgroundColor: {control: 'color'},
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "img-default",
    srcImg: Images.PH2Logo || 'https://picsum.photos/200',
    width: '200px',
    height: '200px',
    margin: '0px',
    borderRadius: '0px',
    onClick: action('on-click')
};
