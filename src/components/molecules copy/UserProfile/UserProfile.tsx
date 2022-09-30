import React from 'react';
import {UserProfileProps} from './UserProfile.props';
import './UserProfile.styles.css';
import {Text} from '../../atoms/Text';
import {Images} from '../../../configs/images';
import {Button} from '../../atoms/Button';

export const UserProfile: React.FC<UserProfileProps> = ({
  onClick
}) => {
  const userData = localStorage.getItem('userData');
  let fullName = '';
  if(userData) {
    fullName = JSON.parse(userData).fullName;
  }
  return (
      <div className="user-profile">
        <Text children={fullName} color='#fff' fontSize={14} margin='0 10px'/>
        <Text children='|' margin='0 10px 0 3px' color='#fff' fontSize={14}/>
        <Button width={19} backgroundColor='transparent' variant='only-icon' linkIcon={Images.Logout} onClick={onClick}/>
      </div>
  );
};
