import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from './index';
import { action } from '@storybook/addon-actions';
import {Images} from '../../../configs/images';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  argTypes: {
    color: { control: 'color' },
  }
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />

export const CheckBoxEnable = Template.bind({});
CheckBoxEnable.args = {
  width: '20px',
  height: '20px',
  border: '1px solid',
  borderRadius: '4px'
};

export const CheckBoxDisabled = Template.bind({});
CheckBoxDisabled.args = {
  width: '20px',
  height: '20px',
  border: '1px solid',
  disabled: true,
  borderRadius: '4px'
};

export const CheckBoxChecked = Template.bind({});
CheckBoxChecked.args = {
  width: '20px',
  height: '20px',
  border: '1px solid',
  checked: true,
  borderRadius: '4px'
};