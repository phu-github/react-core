import React, { useState } from 'react';
import { SideBarProps } from './SideBar.props';
import './SideBar.styles.scss';
import { Button } from "../../atoms/Button";
import { Link } from "../../atoms/Link";

export const SideBar: React.FC<SideBarProps> = ({
    sidebarArr= [],
}) => {

  const [active, setActive] = useState(sidebarArr[0]);
  

  const handleSideBar = (leftNavBtn: any) => {
    setActive(leftNavBtn);
  }
  // console.log("active=", active);
  return (
      <div className="m-sidebar">
        {
            sidebarArr?.map((sidebarItem: any, index) =>
                <div className="menu-sidebar" key={index}>
                    <>
                        {console.log("sidebarItem ===", sidebarItem)}
                        <Button
                            variant='btn-icon-text'
                            isActive={active === sidebarItem}
                            onClick={() =>handleSideBar(sidebarItem)}
                            title={sidebarItem.name}
                            linkIcon={sidebarItem.linkIcon }
                            linkIconPlus= {sidebarItem.linkIconPlus  }
                            imgVariantPlus= {sidebarItem.imgVariantPlus }
                        />
                    </>
                        {sidebarItem.childrens
                            ?  (
                                    <>
                                        <Link variant='sub-item' url={sidebarItem.childrens.path} children={sidebarItem.childrens.name}/>
                                        {sidebarItem.childrens?.map((sidebarItemSub: any, id: number) =>
                                            <>
                                                {console.log("sidebarItemSub ===", sidebarItemSub)}
                                                <SideBar key={id.toString()} sidebarArr = {[sidebarItemSub]}/>
                                            </>
                                        )}
                                    </>
                                )
                            : (true)
                        }

                </div>
            )
        }
      </div>
  );
};
