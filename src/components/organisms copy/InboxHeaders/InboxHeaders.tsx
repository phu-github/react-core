import React from 'react'
import { Card } from '../../molecules/Card'
import { InboxHeadersProps } from './InboxHeaders.props'
import './InboxHeaders.styles.css';

export const InboxHeaders: React.FC<InboxHeadersProps> = ({
    children
}) => {
  return (
   <Card
    title='Headers'
    padding={'14px 22px'}
    margin={'20px 0'}
    width={773}
    height={397}
    border={'1px solid #808888'}
    fontSize={'24px'}
    fontWeight={'400'}
    txtColor={'#193051'}
    txtMargin={'0 0 12px 0'}
   >
     <div className='info-header has-scrollbar'>
      {children}
     </div>
   </Card>

  )
}
