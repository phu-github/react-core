import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StatusBar} from './index';


export default {
  title: 'Organisms/StatusBar',
  component: StatusBar,
} as ComponentMeta<typeof StatusBar>;

const Template: ComponentStory<typeof StatusBar> = (args) => <StatusBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  statusBarArr: [
    {
      color: '#B00020',
      content: 'High priority'
    },
    {
      color: '#FCAB10',
      content: 'Medium'
    },
    {
      color: '#9DC914',
      content: 'Low'
    },
    {
      color: '#808888',
      content: 'Unknown'
    }
  ]
};
