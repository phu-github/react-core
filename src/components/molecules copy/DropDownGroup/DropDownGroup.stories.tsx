import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {DropDownGroup} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/DropDownGroup',
  component: DropDownGroup,
} as ComponentMeta<typeof DropDownGroup>;

const Template: ComponentStory<typeof DropDownGroup> = (args) => <DropDownGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
