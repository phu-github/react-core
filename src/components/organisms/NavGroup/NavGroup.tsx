import React from 'react';
import {NavGroupProps} from './NavGroup.props';
import './NavGroup.styles.scss';
import {Brand} from "../../molecules/Brand";
import {SideBar} from "../../molecules/Sidebar";
import {SearchBar} from "../../molecules/SearchBar";
import {Images} from "../../../configs/images";

// Sự dung da ngôn ngữ
import { useTranslation, initReactI18next } from "react-i18next";

export const NavGroup: React.FC<NavGroupProps> = ({
                                                      oIsLink= true
                                                  }) => {
    const {t} = useTranslation();
    const sidebarArr = [
        {
            name: t('Manufacturing'),
            linkIcon: Images.Book || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/manufacturing',
            childrens: [
                {
                    name: 'Roll Order',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/dashboard'
                },
                {
                    name: 'Deleted Roll Orders',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/deleted_order'
                },
                {
                    name: 'Product/Stencil',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/product/stencil'
                },
                {
                    name: 'Product Category',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/product/category'
                },
                {
                    name: 'Bundling Positions',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/product/bundling_position'
                },
                {
                    name: 'Stations',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/product/stations'
                },
                {
                    name: 'Remarks & Alerts',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date',
                    childrens: [
                        {
                            name: 'Map To Product',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/remarks/filter',

                        },
                        {
                            name: 'Edit The Master Data',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/remarks/master_data'
                        },
                    ]
                },
                {
                    name: 'Pricing Data',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/remarks/master_data',
                    childrens: [
                        {
                            name: 'Manufacturing Pricing',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/remarks/filter',
                            childrens: [
                                {
                                    name: 'Base Price',
                                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                                    activeObject: false,
                                    linkIconPlus: Images.RightIcon,
                                    imgVariantPlus: 'img-arrow',
                                    path: 'product/pricing_data/manufacturing/base_price'

                                },
                                {
                                    name: 'Add-On Cost',
                                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                                    activeObject: false,
                                    linkIconPlus: Images.RightIcon,
                                    imgVariantPlus: 'img-arrow',
                                    path: '/product/pricing_data/manufacturing/add_on_cost'
                                },
                            ]
                        },
                        {
                            name: 'Sales Pricing',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/remarks/master_data',
                            childrens: [
                                {
                                    name: 'Base Price',
                                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                                    activeObject: false,
                                    linkIconPlus: Images.RightIcon,
                                    imgVariantPlus: 'img-arrow',
                                    path: 'product/pricing_data/sales/base_price'

                                },
                                {
                                    name: 'Add-On Cost',
                                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                                    activeObject: false,
                                    linkIconPlus: Images.RightIcon,
                                    imgVariantPlus: 'img-arrow',
                                    path: '/product/pricing_data/sales/add_on_cost'
                                },
                            ]
                        },
                    ]
                },
                {
                    name: 'Slit Coil',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/product/slit_coil'
                },
            ]
        },
        {
            name: 'Roll Change Tasks',
            linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/inbox',
            childrens: [
                {
                    name: 'Task Execution',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/task/execution'
                },
                {
                    name: 'Master Data',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/task/task_master'
                },
            ]
        },
        {
            name: 'Performance Report',
            linkIcon: Images.Book || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/action',
        },
        {
            name: 'TTS API',
            linkIcon: Images.Grade || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.ReportIcon,
            imgVariantPlus: 'img-arrow',
            path: '/reports',
        },
        {
            name: 'Maintenance',
            linkIcon: Images.Settings || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/setting',
            childrens: [
                {
                    name: 'Equipments',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date'
                },
                {
                    name: 'Part',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/dashboard'
                },
                {
                    name: 'Maintenance Tasks',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date',
                    childrens: [
                        {
                            name: 'Task Execution',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/get_date'
                        },
                        {
                            name: 'Master Data',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/dashboard'
                        },
                        {
                            name: 'Work History',
                            linkIcon: Images.BookMark || 'https://picsum.photos/19',
                            activeObject: false,
                            linkIconPlus: Images.RightIcon,
                            imgVariantPlus: 'img-arrow',
                            path: '/get_date'
                        },
                    ]
                },
                {
                    name: 'Process',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date'
                },
                {
                    name: 'Inventory',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date'
                },
                {
                    name: 'Failure',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/get_date'
                },
                {
                    name: 'Andon',
                    linkIcon: Images.BookMark || 'https://picsum.photos/19',
                    activeObject: false,
                    linkIconPlus: Images.RightIcon,
                    imgVariantPlus: 'img-arrow',
                    path: '/anđon'
                },
            ]
        },

    ];

    return (
        <div className="o-nav-group">
            <Brand mVariant='m-brand'/>
            <SideBar mVariant='m-sidebar' sidebarArr={sidebarArr} isLink={oIsLink} />
        </div>
    );
};