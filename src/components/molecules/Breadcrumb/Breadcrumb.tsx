import React from 'react';
import {BreadcrumbProps} from './Breadcrumb.props';
import './Breadcrumb.styles.css';
import {Link} from '../../atoms/Link';
import {Text} from '../../atoms/Text';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    navigationLinks,
}) => {
  return (
      <div className="breadcrumb">
        <Text variant={navigationLinks && navigationLinks.length > 0 ? 'has-link': ''} children={'Phriendly Triage Centre'} />
        {
          navigationLinks?.map((bread:any) =>  <Link color='#467599' url={bread.href} text={bread.name} />)
        }
      </div>
  );
};
