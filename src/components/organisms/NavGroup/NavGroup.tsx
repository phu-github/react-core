import React from 'react';
import {NavGroupProps} from './NavGroup.props';
import './NavGroup.styles.scss';
import {Brand} from "../../molecules/Brand";
import {SideBar} from "../../molecules/Sidebar";


export const NavGroup: React.FC<NavGroupProps> = ({

}) => {
  return (
    <div className="o-navgroup">
        <Brand/>
    </div>
  );
};