import React from 'react'
import { Card } from '../../molecules/Card'
import { VisrusScanResultsProps } from './VisrusScanResults.props'

export const VisrusScanResult: React.FC<VisrusScanResultsProps> = ({
    children
}) => {
  return (
   <Card 
    title='Visrus Scan Result'
    padding={'14px 22px'}
    width={'384px'}
    height={'275px'}
    border={'1px solid #808888'}
    fontSize={'24px'}
    fontWeight={'400'}
    txtColor={'#193051'}
   >
    {children}
   </Card>
  )
}
