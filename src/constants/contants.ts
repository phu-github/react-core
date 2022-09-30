import {Images} from "../configs/images";

export const DATE_FORMAT = 'dd/MM/yyyy';
export const CONSTANTS = {
  'ROUTER': [
    {
      name: 'Dashboard',
      href: '/dashboard',
      linkIcon: Images.DashboardIcon
    },
    {
      name: 'Inbox',
      href: '/inbox',
      linkIcon: Images.MailIcon
    },
    {
      name: 'Actions',
      href: '/actions',
      linkIcon: Images.BuildIcon
    },
    {
      name: 'Reports',
      href: '/reports',
      linkIcon: Images.ReportIcon
    },
    {
      name: 'Settings',
      href: '/reports',
      linkIcon: Images.SettingIcon
    }
  ],
  "PRIORITIES": {
    "Low": {
      'linkIcon': '',
      "color": '#9DC914'
    },
    "High": {
      'linkIcon': '',
      'color': '#B00020'
    },
    "Unknown": {
      'linkIcon': '',
      'color':'#808888'
    },
    "Medium": {
      'linkIcon': '',
      'color':'#FCAB10'
    }
  },
  "CATEGORIES": {
    "Threat": "#ED1C24",
    "Clean": "#03A9F5",
    "Spam": "#B23292",
    "Unknown": "#808888"
  },
  "STATUS":{
    "InReview": {
      "bgColor": "#011111",
      "color": "#ffffff"
    },
    "Resolved": {
      "bgColor": "#BDE541",
      "color": "#011111"
    },
    "Unknown": {
      "bgColor": "#BEBEBE",
      "color": "#011111"
    }
  }
};
