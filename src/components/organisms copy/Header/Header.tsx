import React, {useState} from 'react';
import {HeaderProps} from './Header.props';
import './Header.styles.css';
import {Image} from '../../atoms/Image';
import {Images} from '../../../configs/images';
import {UserProfile} from '../../molecules/UserProfile';
import {DropDownList} from '../../atoms/DropDownList';

export const Header: React.FC<HeaderProps> = ({

}) => {
  // const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  }
  const [zoneSelected , setZoneSelected] = useState('');
  const zoneDropdownData = [
    {
      id: 1,
      content: 'NAB - National Autralia Bank'
    },
    {
      id: 2,
      content: 'NAB - National Autralia Bank 2'
    },
    {
      id: 3,
      content: 'NAB - National Autralia Bank 3'
    },
  ];
  const handleSelectedZone = (item:any) => {
    setZoneSelected(item);
  };
  return (
    <header className='fixed'>
      <div className='header-title'>
        <Image width={175} srcImg={Images.PH2Logo} onClick={() => {}}/>
        <DropDownList margin='0 0 0 50px' variantDropdown='blue-dropdown' selectedTitle={zoneDropdownData[0].content} data={zoneDropdownData} onSelectItem={handleSelectedZone} />
      </div>
      <UserProfile onClick={handleLogout}/>
    </header>
  );
};
