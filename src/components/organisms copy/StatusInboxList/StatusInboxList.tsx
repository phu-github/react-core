import React, { useState }from 'react';
import {StatusInboxListProps} from './StatusInboxList.props';
import './StatusInboxList.styles.css';
import {CONSTANTS} from '../../../constants/contants';
import {StatusInbox} from '../../molecules/StatusInbox';


export const StatusInboxList: React.FC<StatusInboxListProps> = ({
  width= 422,
  height= 1508,
  statusInboxArr= [],
  onClickStatusInbox,
}) => {
  const [active, setEmailId] = useState(statusInboxArr[0] && statusInboxArr[0].email_id['S']);
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

  const handleClickOnStatusItem = (emailId: string) => {
    if(emailId) {
      setEmailId(emailId)
      // @ts-ignore
      onClickStatusInbox(emailId)
    }
  }
  // @ts-ignore
  return (
      <div className={'status-inbox-wrapper'} style={{width, height}} >
          <div className={'status-inbox-list'}>
              {
                  statusInboxArr?.map((inbox, index) => {
                    const isActive = parseInt(active) === parseInt(inbox.email_id && inbox.email_id['S']);
                    return <StatusInbox
                      isActive={isActive}
                      onClick={() => handleClickOnStatusItem(inbox.email_id && inbox.email_id['S'])}
                      key={index}
                      color={setStatusColor(inbox.priority['S'], '')}
                      content={inbox.subject && inbox.subject['S']}
                    />
                  }

                  )
              }
          </div>
      </div>
  );
};
