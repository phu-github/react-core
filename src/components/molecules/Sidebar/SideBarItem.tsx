import React, { useState } from 'react';
import './SideBar.styles.scss';
import { Button } from "../../atoms/Button";
import { Link } from "../../atoms/Link";
import { Image } from "../../atoms/Image";

interface SideBarItemProps {
    sidebarItem?: any;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ sidebarItem = [] }) => {

    const [active, setActive] = useState(sidebarItem);

    const handleSideBar = (leftNavBtn: any) => {
        setActive(leftNavBtn);
    }
    console.log("active===========",  sidebarItem);
    return (
        <>
            { sidebarItem.childrens
                ?(
                    <div className='sidebar-item'>
                        <Button
                            variant='sidebar-btn'
                            isActive={active === sidebarItem}
                            onClick={() =>handleSideBar(sidebarItem)}
                            imgVariant= 'img-before'
                            title={sidebarItem.name}
                            linkIcon={sidebarItem.linkIcon }
                            linkIconPlus= {sidebarItem.linkIconPlus  }
                            imgVariantPlus= 'img-after'
                        />
                        <div className='sidebar-content'>
                            {sidebarItem.childrens.map((sidebarItemSub: any, id: number) =>
                                <SideBarItem key={id.toString()} sidebarItem = {sidebarItemSub}/>
                            )}
                        </div>
                    </div>
                )
                :( <div className='sidebar-item-link'>
                        <Image variant='sidebar-img' srcImg={sidebarItem.linkIcon} />
                        <Link variant='sidebar-link' url={sidebarItem.path} children={sidebarItem.name}/>
                    </div>
                )
            }
        </>
    );
};
