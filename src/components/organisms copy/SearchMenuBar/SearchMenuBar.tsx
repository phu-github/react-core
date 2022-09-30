import React,{useState} from 'react'
import {SearchMenuBarProps} from './SearchMenuBar.props'
import './SearchMenuBar.styles.css';
import {Colors} from '../../../configs/colors';
import {Images} from '../../../configs/images';
import {SearchFilter} from '../../molecules/SearchFilter';
import {DateRangePicker} from '../../atoms/DateRangePicker';
import {Button} from '../../atoms/Button';
import {DropDownList} from "../../atoms/DropDownList";
import moment from "moment";

export const SearchMenuBar: React.FC<SearchMenuBarProps> = ({
  width,
  height = 73,
  margin='0 16px 0 13px',
  onFilter,
  handleEnterSearch
}) => {
    const sDate = moment().utc().subtract(1, 'months').format('l');
    const eDate = moment().utc().format('l');
    const filterResult: any = {
      keyword: "",
      startDate: moment().utc().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss'),
      endDate: moment().utc().format('YYYY-MM-DD HH:mm:ss'),
      status: ["In Review", "Resolved"],
      priority: ["High", "Medium", "Low", "Critical"],
      category: ["Unknown", "Threat", "Clean", "Spam"],
    }
    const [filterDataResult, setFilterDataResult] = useState<any>(filterResult);
    const [isClearFilter, setClearFilter] = useState<any>(false);
    const [selectedItems, setSelectedItems] = useState<any>({});
    const DropDownArrStatus = [
        {
            id:3,
            content:'All',
        },
        {
            id: 1,
            content: 'In Review'
        },
        {
            id: 2,
            content: 'Resolved'
        }
    ];

    const DropDownArrPriority = [
        {
          id:4,
          content:'All',
        },
        {
            id: 1,
            content: 'High'
        },
        {
            id: 2,
            content: 'Medium'
        },
        {
            id: 3,
            content: 'Low'
        }
    ];

    const DropDownArrCate = [
        {
            id: 5,
            content: 'All'
        },
        {
            id: 1,
            content: 'Threat'
        },
        {
            id: 2,
            content: 'Clean'
        },
        {
            id: 3,
            content: 'Spam'
        },
        {
            id: 4,
            content: 'Unknown'
        }
    ]

    const filterSelection = (item:any, type:any) => {
      setClearFilter(false)
      if(item !== 'All') {
        filterResult.status = []
        setFilterDataResult((prev:any) => {
          return  ({
            ...prev,
            [type]: [item],
          })
        })
      } else {
        setFilterDataResult((prev:any) => {
          return  ({
            ...prev,
            [type]: filterResult[type],
          })
        })
      }
      // set value for dropdown
      setSelectedItems((prev:any) => {
        return  ({
          ...prev,
          [type]: item,
        })
      })
    }

    const handleFilterMenu = () => {
      onFilter && onFilter(filterDataResult)
    }

    const handleFilterDateRange = (start?:string, end?:string) => {
      setFilterDataResult((prev:any) => {
        return ({
          ...prev,
          startDate: moment(start).utc().format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(end).utc().format('YYYY-MM-DD HH:mm:ss'),
        })
      })
    }

    const handleClearFilter = () => {
      filterSelection('All', 'status')
      filterSelection('All', 'priority')
      filterSelection('All', 'category')
      setClearFilter(true);

    }

    const handleSearchKeyword = (pValue:any) => {
        setFilterDataResult((prev:any) => {
            return ({
                ...prev,
              keyword: pValue,
            })
        });
    }

    return (
       <div className={'search-menu'} style={{width, height, margin, }}>
           <SearchFilter
             height={40}
             widthTextInput={240}
             titleInput={'Search by keywords'}
             borderColor={Colors.BorderColor}
             iconSrc={Images.SearchFilter}
             borderRadius={'4px'}
             margin='0 16px 0 0'
             handleKeyDownEvent={handleEnterSearch}
             onSearchEvent={handleSearchKeyword}
           />
           <DateRangePicker
             start={sDate}
             end={eDate}
            textFilter={ 'Date range:'}
            linkIcon={ ''}
            fontSize={ '14px'}
            color={ '#011111'}
            colorText={ '#8C8C8C'}
            width={ '260px'}
            height={ '40px'}
            padding={ '0'}
            margin='0 16px 0 0'
            cssClass={'daterange-input'}
            onDateFilter={handleFilterDateRange}
           />

           <DropDownList itemSelected={selectedItems['status']} variant='status' labelTitle={'Status'} selectedTitle={'All'} data={DropDownArrStatus} onSelectItem={filterSelection}/>

           <DropDownList itemSelected={selectedItems['priority']} variant='priority' labelTitle={'Priority'} selectedTitle={'All'} data={DropDownArrPriority} onSelectItem={filterSelection}/>

           <DropDownList itemSelected={selectedItems['category']} variant='category' labelTitle={'Category'} selectedTitle={'All'} data={DropDownArrCate} onSelectItem={filterSelection} />

           <Button title='Clear Filters'
                   borderRadius={'4px'}
                   backgroundColor='transparent'
                   width={'auto'} height={30}
                   fontSize={16}
                   fontWeight={'600'}
                   titleMargin={0}
                   color={'#467599'}
                   margin={'0 8px 0 0'}
                   onClick={handleClearFilter}
                   variant='clear-background'
           />
           <Button title={'Apply Filters'}
                   borderRadius={'4px'}
                   backgroundColor={'#FFFFFF'}
                   width={140} height={30}
                   border={'1px solid #467599'}
                   fontSize={16}
                   fontWeight={'600'}
                   color={'#467599'}
                   margin={'0 16px 0 0'}
                   onClick={handleFilterMenu}
           />
       </div>
    )
}
