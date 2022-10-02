import React from 'react';
import {BrandProps} from './Brand.props';
import './Brand.styles.scss';
import { Image } from '../../atoms/Image';
import { Button } from '../../atoms/Button';
import {Images} from "../../../configs/images";

export const Brand: React.FC<BrandProps> = ({

}) => {
  return (
    <div className="m-brand">
        <Button
            variant='btn-logo'
            imgVariant='img-logo'
            title= "Storybook"
            linkIcon={Images.Logo}
        />
        <Image variant='img-menu' srcImg={Images.Menu}  />
    </div>
  );
};