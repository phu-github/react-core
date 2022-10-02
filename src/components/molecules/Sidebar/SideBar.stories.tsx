import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SideBar} from '.';
import {Images} from "../../../configs/images";

export default {
  title: 'Molecules/Content/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sidebarArr : [
    {
      name: 'Dashboard',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: 'null',
      linkIconPlus: Images.RightIcon,
      imgVariantPlus: 'img-arrow',
      path: '/dashboard',
      childrens: [
        {
          name: 'Dashboard Sub1',
          linkIcon: Images.Grade || 'https://picsum.photos/19',
          activeObject: 'null',
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub1',
        },
        {
          name: 'Dashboard Sub2',
          linkIcon: Images.Grade || 'https://picsum.photos/19',
          activeObject: 'null',
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub2'
        },
      ]
    },
    {
      name: 'Inbox',
      linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
      activeObject: 'null',
      linkIconPlus: Images.InboxIcon,
      imgVariantPlus: 'img-arrow',
      path: '/inbox',
    },
    {
      name: 'Actions',
      linkIcon: Images.Book || 'https://picsum.photos/19',
      activeObject: 'null',
      linkIconPlus: Images.RightIcon,
      imgVariantPlus: 'img-arrow',
      path: '/action',
      childrens: [
        {
          name: 'Action 1',
          linkIcon: Images.Grade || 'https://picsum.photos/19',
          activeObject: 'null',
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub1'
        },
        {
          name: 'Action 2',
          linkIcon: Images.Grade || 'https://picsum.photos/19',
          activeObject: 'null',
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub2',
          childrens: [
            {
              name: 'action 2.1',
              linkIcon: Images.Grade || 'https://picsum.photos/19',
              activeObject: 'null',
              linkIconPlus: Images.RightIcon,
              imgVariantPlus: 'img-arrow',
              path: '/d-sub1'
            },
            {
              name: 'action 2.2',
              linkIcon: Images.Grade || 'https://picsum.photos/19',
              activeObject: 'null',
              linkIconPlus: Images.RightIcon,
              imgVariantPlus: 'img-arrow',
              path: '/d-sub2'
            },
          ]
        },
      ]
    },
    {
      name: 'Reports',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: 'null',
      linkIconPlus: Images.ReportIcon,
      imgVariantPlus: 'img-arrow',
      path: '/reports',
    }
  ]
};



