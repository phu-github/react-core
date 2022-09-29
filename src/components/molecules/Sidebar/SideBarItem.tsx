import React, {useState} from "react";
import "./SideBar.styles.scss";
import { Button } from "../../atoms/Button";
import { Link } from "../../atoms/Link";
import { Image } from "../../atoms/Image";

interface SideBarItemProps {
    sidebarItem?: any;
    isActive: boolean;
    onChangeActive: (navItem: string) => void;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
        sidebarItem = [],
        isActive,
        onChangeActive,
    }) => {

    const [open, setOpen]  = useState(false)

    return (
        <>
            {sidebarItem.childrens ? (
                <div className={`sidebar-item ${open ?"open":""}`} >
                    <Button
                        variant='sidebar-btn'
                        isActive={isActive}
                        // onClick={() => onChangeActive(sidebarItem.name)}
                        onClick={() => setOpen(!open)}
                        imgVariant='img-before'
                        title={sidebarItem.name}
                        linkIcon={sidebarItem.linkIcon}
                        linkIconPlus={sidebarItem.linkIconPlus}
                        imgVariantPlus='img-after'
                    />
                    <div className='sidebar-content'>
                        {sidebarItem.childrens.map((sidebarItemSub: any, id: number) => (
                            <SideBarItem
                                isActive={isActive}
                                onChangeActive={onChangeActive}
                                key={id.toString()}
                                sidebarItem={sidebarItemSub}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div
                    className={`sidebar-item link ${isActive ?"active":""}`}
                    onClick={() => onChangeActive(sidebarItem.name)}
                >
                    <Image variant='sidebar-img' srcImg={sidebarItem.linkIcon} />
                    <Link
                        variant='sidebar-link'
                        url={sidebarItem.path}
                        children={sidebarItem.name}
                    />
                </div>
            )}
        </>
    );
};