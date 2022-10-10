import React from 'react';
import {NavGroupProps} from './NavGroup.props';
import './NavGroup.styles.scss';
import {Brand} from "../../molecules/Brand";
import {SideBar} from "../../molecules/Sidebar";
import {SearchBar} from "../../molecules/SearchBar";
import {Images} from "../../../configs/images";


export const NavGroup: React.FC<NavGroupProps> = ({

}) => {

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
            name: 'Settings',
            linkIcon: Images.Settings || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.ReportIcon,
            imgVariantPlus: 'img-arrow',
            path: '/setting',
        },

    ];

    return (
        <div className="o-nav-group">
            <Brand mVariant='m-brand'/>
            <SearchBar mVariant="m-search-bar" mLinkIcon={Images.SearchIcon}/>
            <SideBar mVariant='m-sidebar' sidebarArr={sidebarArr} />
        </div>
    );
};