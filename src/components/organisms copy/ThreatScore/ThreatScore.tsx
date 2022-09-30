import React from 'react'
import { Card } from '../../molecules/Card'
import { ThreatScroreProps } from './ThreatScore.props'

export const ThreatScore: React.FC<ThreatScroreProps> = ({
    children
}) => {
  return (
    <Card
    title='Threat Score'
    width={384}
    height={111}
    margin={'20px 0 11px 0'}
    fontWeight="400"
    fontSize={'24px'}
    txtColor='#193051'
    border='1px solid #808888'
    padding={'14px 22px'}
    >{children}</Card>
  )
}
