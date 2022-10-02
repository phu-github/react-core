import React, {FC} from 'react';
import './App.scss';
import {SideBar} from "./components/molecules/Sidebar";
import {Images} from "./configs/images";
import './configs/reset.css';
import './configs/global.scss';
import {Outlet} from "react-router-dom";
function App() {

  const sidebarArr = [
    {
      name: 'Dashboard',
      linkIcon: Images.Book || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.RightIcon,
      imgVariantPlus: 'img-arrow',
      path: '/dashboard',
      childrens: [
        {
          name: 'Dashboard Sub1',
          linkIcon: Images.BookMark || 'https://picsum.photos/19',
          activeObject: false,
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/dashboard'
        },
        {
          name: 'Dashboard Sub2',
          linkIcon: Images.BookMark || 'https://picsum.photos/19',
          activeObject: false,
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/dashboard'
        },
      ]
    },
    {
      name: 'Inbox',
      linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.InboxIcon,
      imgVariantPlus: 'img-arrow',
      path: '/inbox',
    },
    {
      name: 'Actions',
      linkIcon: Images.Book || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.RightIcon,
      imgVariantPlus: 'img-arrow',
      path: '/action',
      childrens: [
        {
          name: 'Action 1',
          linkIcon: Images.BookMark || 'https://picsum.photos/19',
          activeObject: false,
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub1'
        },
        {
          name: 'Action 2',
          linkIcon: Images.BookMark || 'https://picsum.photos/19',
          activeObject: false,
          linkIconPlus: Images.RightIcon,
          imgVariantPlus: 'img-arrow',
          path: '/d-sub2',
          childrens: [
            {
              name: 'action 2.1',
              linkIcon: Images.BookMark || 'https://picsum.photos/19',
              activeObject: false,
              linkIconPlus: Images.RightIcon,
              imgVariantPlus: 'img-arrow',
              path: '/d-sub1'
            },
            {
              name: 'action 2.2',
              linkIcon: Images.BookMark || 'https://picsum.photos/19',
              activeObject: false,
              linkIconPlus: Images.RightIcon,
              imgVariantPlus: 'img-arrow',
              path: '/d-sub2',
            },
          ]
        },
      ]
    },
    {
      name: 'Reports',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.ReportIcon,
      imgVariantPlus: 'img-arrow',
      path: '/reports',
    },
    {
      name: 'Reports',
      linkIcon: Images.Settings || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.ReportIcon,
      imgVariantPlus: 'img-arrow',
      path: '/setting',
    },

  ];
  return (
    <div className="App">
        <SideBar sidebarArr={sidebarArr} />
        <Outlet/>
    </div>
  );
}

export default App;
