import React, { useState } from 'react';
import './SideBar.styles.scss';
import { Button } from "../../atoms/Button";
import { Link } from "../../atoms/Link";

interface SideBarItemProps {
    variant?: string
    sidebarItem?: any;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ variant= 'main' ,sidebarItem = [] }) => {

    const [active, setActive] = useState(sidebarItem[0]);
    const handleSideBar = (leftNavBtn: any) => {
        setActive(leftNavBtn);
    }
    console.log("sidebarItem===========",  sidebarItem);
    return (
        <>
            { sidebarItem.childrens
                ?(
                    <div className='sidebar-item'>
                        <Button
                            variant='btn-sidebar'
                            isActive={active === sidebarItem}
                            onClick={() =>handleSideBar(sidebarItem)}
                            imgVariant= 'img-left'
                            title={sidebarItem.name}
                            linkIcon={sidebarItem.linkIcon }
                            linkIconPlus= {sidebarItem.linkIconPlus  }
                            imgVariantPlus= 'img-arrow'
                        />
                        {sidebarItem.childrens?.map((sidebarItemSub: any, id: number) =>
                            <SideBarItem key={id.toString()} variant={`main-${id}`} sidebarItem = {sidebarItemSub}/>
                        )}
                    </div>
                )
                : (<Link variant='sidebar-item' url={sidebarItem.path} children={sidebarItem.name}/>)
            }
        </>
    );
};
