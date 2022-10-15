import React from 'react';
import {HeaderProps} from './Header.props';
import './Header.styles.scss';
import {SearchBar} from "../../molecules/SearchBar";
import {Button} from "../../atoms/Button";
import {Image} from '../../atoms/Image'
import {Images} from "../../../configs/images";

export const Header: React.FC<HeaderProps> = ({mVariant = 'o-header' }) => {

    return (
        <header className={`${mVariant}`}>
            <SearchBar mVariant="m-search-bar" mLinkIcon={Images.SearchIcon}/>
            <div className='profile'>
                <Button
                    variant = 'btn-message'
                    linkIcon = {Images.MessageIcon}
                    title = "1"
                    txtVariant = 'txt-message'
                    imgVariant = 'img-message'
                />
                <Button
                    variant = 'btn-bell-notify'
                    linkIcon = {Images.BellIcon}
                    title = "10"
                    txtVariant = 'txt-bell-notify'
                    imgVariant = 'img-bell-notify'
                />
                <Image variant='img-avatar' srcImg={Images.Avatar}/>
            </div>
        </header>
    );
};