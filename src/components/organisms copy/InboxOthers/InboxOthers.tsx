import React from 'react'
import { Card } from '../../molecules/Card'
import { InboxHeadersProps } from '../InboxHeaders/InboxHeaders.props'

export const InboxOthers:React.FC<InboxHeadersProps> = ({
    children
}) => {
  return (
    <Card
    title='Others'
    padding={'14px 22px'}
    width={1179}
    height={702}
    border={'1px solid #808888'}
    fontSize={24}
    fontWeight={400}
    txtColor={'#193051'}
    >
        {children}
    </Card>
  )
}
