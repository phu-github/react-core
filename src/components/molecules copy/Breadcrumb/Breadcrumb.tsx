import React from 'react';
import {BreadcrumbProps} from './Breadcrumb.props';
import './Breadcrumb.styles.css';
import {Link} from '../../atoms/Link';
import {Text} from '../../atoms/Text';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    navigationLinks,
    border,
}) => {
  return (
      <div className="breadcrumb"  style={{border}}>
        <Text cssClass={navigationLinks && navigationLinks.length > 0 ? 'has-link': ''} children={'Phriendly Triage Centre'} />
        {
          navigationLinks?.map((bread:any, index) =>  <Link color='#467599' key={index} url={bread.href} text={bread.name} />)
        }
      </div>
  );
};
