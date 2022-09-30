import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
    title: 'Molecules/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Summary = (args:any) => (<Card {...args} title="Summary"
    width='676px'
    height='262px'
    fontFamily="Righteous"
    fontSize={"24px"}
    fontWeight={"400"} 
    txtColor={'#193051'}
    borderColor={'#808888'}
    border={'1px solid'}
    padding='16.23px 22px'
    />)
export const Actions = (args: any) => (
        <Card
            {...args}
            title="Actions"
            width='483px'
            height='262px'
            fontSize={'24px'}
            fontWeight={'400'}
            txtColor={'#193051'}
            border='1px solid #808888'
            backgroundColor="#FFFFFF"
            padding={'14px 22px'}
        />
    )

export const ThreatScore = (args: any) =>  (
    <Card
            {...args}
            title="Threat Score"
            width='384px'
            height='111px'
            fontSize={'24px'}
            fontWeight={'400'}
            txtColor={'#193051'}
            border='1px solid #808888'
            backgroundColor="#FFFFFF"
            padding={'14px 22px'}
        />
)

export const Headers = (args: any) =>  (
    <Card
            {...args}
            title="Headers"
            width='773px'
            height='397px'
            fontSize={'24px'}
            fontWeight={'400'}
            txtColor={'#193051'}
            border='1px solid #808888'
            backgroundColor="#FFFFFF"
            padding={'14px 22px'}
        />
)

export const VisrusScanResults = (args: any) =>  (
    <Card
            {...args}
            title="Visrus Scan results"
            width='384px'
            height='275px'
            fontSize={'24px'}
            fontWeight={'400'}
            txtColor={'#193051'}
            border='1px solid #808888'
            backgroundColor="#FFFFFF"
            padding={'14px 22px'}
        />
)

export const Others = (args: any) =>  (
    <Card
            {...args}
            title="Others"
            width='1179px'
            height='702px'
            fontSize={'24px'}
            fontWeight={'400'}
            txtColor={'#193051'}
            border='1px solid #808888'
            backgroundColor="#FFFFFF"
            padding={'14px 22px'}
        />
)