import React from 'react';
import {DashBoardSearchProps} from './DashBoardSearch.props';
import {Text} from "../../atoms/Text";
import {SearchBar} from '../../molecules/SearchBar';
import './DashBoardSearch.styles.css';

export const DashBoardSearch: React.FC<DashBoardSearchProps> = ({

}) => {
  const handleSearchDashBoard = () => {

  }
  return (
    <div className='dashboard-search'>
      <div className='search-box'>
        <Text fontSize={32} margin='0 16px 0' children='DashBoard' />
        <SearchBar onSearchEvent={handleSearchDashBoard} />
      </div>
      <div className='datetime-filter'>

      </div>
    </div>
  );
};
