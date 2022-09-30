import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {DataTable} from '.';
import data from "./data";
import {IconStatus} from "../../atoms/IconStatus";
import {Text} from "../../atoms/Text";
import {CONSTANTS} from "../../../constants/contants"
import {DropDownList} from "../../atoms/DropDownList";

export default {
  title: 'Molecules/DataTable',
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => <DataTable {...args} />;

const setPriorityColor = (priority: string, icon: string) => {
  if (icon == "color") {
    switch (priority) {
      case 'Low':
        return CONSTANTS.PRIORITIES.Low.color;
        break;
      case 'High':
        return CONSTANTS.PRIORITIES.High.color;
        break;
      case 'Medium':
        return CONSTANTS.PRIORITIES.Medium.color;
        break;
      default:
        return CONSTANTS.PRIORITIES.Unknown.color;
        break;
      }
    }
    else {
      switch (priority) {
        case 'Low':
          return CONSTANTS.PRIORITIES.Low.linkIcon;
          break;
        case 'High':
          return CONSTANTS.PRIORITIES.High.linkIcon;
          break;
        case 'Medium':
          return CONSTANTS.PRIORITIES.Medium.linkIcon;
          break;
        default:
          return CONSTANTS.PRIORITIES.Unknown.linkIcon;
          break;
      }
    }
  }

const setCateColor = (cate: string) => {
  switch (cate) {
    case 'Threat':
      return CONSTANTS.CATEGORIES.Threat;
      break;
    case 'Clean':
      return CONSTANTS.CATEGORIES.Clean;
      break;
    case 'Spam':
      return CONSTANTS.CATEGORIES.Spam;
      break;
    default:
      return CONSTANTS.CATEGORIES.Unknown;
      break;
  }
}

const setStatusColor = (status: string, type: string) => {
  if (type != 'text') {
    switch (status) {
      case 'Resolved':
        return CONSTANTS.STATUS.Resolved.bgColor;
        break;
      case 'In Review':
        return CONSTANTS.STATUS.InReview.bgColor;
        break;
      default:
        return CONSTANTS.STATUS.Unknown.bgColor;
        break;
    }
  }
  else {
    switch (status) {
      case 'Resolved':
        return CONSTANTS.STATUS.Resolved.color;
        break;
      case 'In Review':
        return CONSTANTS.STATUS.InReview.color;
        break;
      default:
        return CONSTANTS.STATUS.Unknown.color;
        break;
    }
  }
}

const dropDownData = [
  {
    id: 1,
    content: 'Delete'
  }
]

export const BasicTable = Template.bind({});
BasicTable.args = {
  columns: [
    {
      name: 'Priority',
      selector: (row: { priority: any; }) =>
          <div className="priority-data">
              <IconStatus marginRight={5} backgroundColor={setPriorityColor(row.priority, 'color')}/>
              <Text fontSize={14} fontWeight={500} children={row.priority}/>
          </div>,
      sortable: true
    },
    {
      name: 'Category',
      selector: (row: { category: any; }) =>
          <div className='category-data' style={{backgroundColor: setCateColor(row.category)}}>{row.category}</div>,
      sortable: true
    },
    {
      name: "From",
      selector: "from",
      sortable: true,
      center: true,
      width: '100'
    },
    {
      name: 'From (Email)',
      selector: (row: { fromEmail: any; }) => row.fromEmail.join(', '),
      left: true
    },
    {
      name: 'Subject',
      selector: 'subject',
      left: true
    },
    {
      name: 'Reported at',
      selector: (row: { reportedAt: any; }) => row.reportedAt,
      sortable: true
    },
    {
      name: 'reported by (Email)',
      selector: (row: { subject: any; }) => row.subject,
      sortable: true
    },
    {
      name: 'Status',
      selector: (row: { status: any; }) =>
          <div className='status-data' style={{color: setStatusColor(row.status, 'text'), backgroundColor: setStatusColor(row.status, '')}}>{row.status}</div>,
      sortable: true
    },
    {
      name: 'Action',
      selector: (row: { title: any; }) =>
          <div className='action-dropdown-list'>
            <DropDownList
                width='116px'
                height='40px'
                border='1px solid'
                disabled={true}
                borderRadius='4px'
                labelTitle=''
                selectedTitle='Actions'
                variant=''
                variantDropdown='actions-dropdown'
                data={dropDownData}
            ></DropDownList>
          </div>,
      sortable: true
    }
  ],
  data: data
};
