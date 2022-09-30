import React from 'react'
import { Card } from '../../molecules/Card'
import { ActionProps } from './Action.props'
import './Action.styles.css';

export const Action: React.FC<ActionProps> = ({
    children,
    titleMargin=0,
    margin = 0,
    padding= 0
}) => {
    return (
        <Card
            title='Actions'
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={padding}
            width={'483px'}
            height={'262px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400"
            margin={margin}
            txtMargin={titleMargin}
        >
                {children}
       
        </Card>
    )
}
