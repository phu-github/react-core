import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { Action } from "./Action";

export default {
    title: 'Organisms/Action',
    component: Action
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />

export const Unknown = () => {
    return (
        <Action
            titleMargin={'0 0 12px 0'}
            padding={'14px 22px'}
        >
            <div className="action-container">
                <div className='action-row'>
                    <Text children="Status:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Text children='Unknown' fontSize={'16px'} margin={'0 0 0 22px '} fontWeight={'700'} color={"#011111"} />
                </div>
                <div className='action-row' style={{ marginTop: '56px' }}>
                    <Text children="Category:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Text children='Unknown' fontSize={'16px'} margin={'0 0 0 22px '} fontWeight={'700'} color={"#011111"} />
                </div>
            </div>
        </Action>
    )
}

export const ResolvedAndSpam = () => {
    return (
        <Action
            titleMargin={'0 0 7px 0'}
            padding={'14px 22px'}
        >
            <div className="aciton-container">
                <div className="action-row">
                    <Text children="Status:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Resolved'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        textAlign="center"
                        margin={'0 0 0 36px'}
                    />
                </div>

                <div className="action-row" style={{ marginTop: '42px' }}>
                    <Text children="Category:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />

                    <Button title='Spam'
                        width={'98px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        textAlign="center"
                        margin={'0 0 0 14px'}
                    />
                </div>

            </div>
        </Action>
    )
};

export const ResolvedAndClean = () => {
    return (
        <Action
            titleMargin={'0 0 7px 0'}
            padding={'14px 22px'}
        >
            <div className="action-container">
                <div className='action-row'>
                    <Text children="Status:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Resolved'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        textAlign="center"
                        margin='0 36px 0'
                    />
                </div>
                <div className='action-row' style={{ marginTop: '42px' }}>
                    <Text children="Category:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Clean'
                        width={'77px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        textAlign="center"
                        margin='0 0 0 14px'
                    />
                </div>
            </div>
            <div className="action-footer">
                <Button title='Send Email'
                    width={'119px'}
                    height={'40px'}
                    borderRadius="4px"
                    color='#FFFFFF'
                    backgroundColor='#467599'
                    fontSize={16}
                    padding={'8px, 16px, 8px, 16px'}
                    fontWeight={'600'}
                    variant=''
                />
            </div>
        </Action>
    )
}

export const InReviewThreatandSendEmail = () => {
    return (
        <Action
            titleMargin={'0 0 7px 0'}
            padding={'14px 22px'}
        >
            <div className="action-container">
                <div className='action-row'>
                    <Text children="Status:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='In Review'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 36px'}
                    />
                </div>
                <div className="action-row" style={{ margin: '0 0 0 80px' }}>
                    <Text children="Potentially malicious and may require further analysis by infosec team"
                        fontSize={'12px'}
                        fontWeight={'500'}
                        color={'#011111'}
                        margin={'5px 0 12px 0'}
                    />
                </div>

                <div className='action-row'>
                    <Text children="Category:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Threat'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 14px'}
                    />
                </div>
            </div>

            <div className="action-footer">
                <Button title='Send Email'
                    width={'119px'}
                    height={'40px'}
                    borderRadius="4px"
                    color='#FFFFFF'
                    backgroundColor='#467599'
                    fontSize={16}
                    padding={'8px, 16px, 8px, 16px'}
                    fontWeight={'600'}
                    variant=''
                />
            </div>
        </Action>
    )
}

export const InReviewAndThreat: ComponentStory<typeof Action> = () => {
    return (
        <Action
            titleMargin={'0 0 7px 0'}
            padding={'14px 22px'}
        >
            <div className="action-container">
                <div className='action-row'>
                    <Text children="Status" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='In Review'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 36px'}
                    />
                </div>
                <div className="action-row" style={{ margin: '0 0 0 80px' }} >
                    <Text children="Potentially malicious and may require further analysis by infosec team"
                        fontSize={'12px'}
                        fontWeight={'500'}
                        color={'#011111'}
                        margin={'5px 0 12px 0'}
                    />
                </div>

                <div className='action-row'>
                    <Text children="Category" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Threat'
                        width={'109px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 14px'}
                    />
                </div>
            </div>

            <div className="action-footer">
                <Button title='Send Email to infosec team'
                    width={'237px'}
                    height={'40px'}
                    borderRadius="4px"
                    color='#FFFFFF'
                    backgroundColor='#467599'
                    fontSize={16}
                    padding={'8px'}
                    fontWeight={'600'}
                    margin='0 16px 0 0'
                    variant=''
                />
            </div>
        </Action>
    )
}

export const TestStatusAndTestCategory = () => {
    return (
        <Action
            titleMargin={'0 0 7px 0'}
            padding={'14px 22px'}
        >
            <div className="action-container">
                <div className='action-row'>
                    <Text children="Status:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Test Status'
                        width={'155px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 36px'}
                    />

                </div>
                <div className="action-row" >

                <Text children="Test status descriptions"
                    fontSize={'12px'}
                    fontWeight={'500'}
                    color={'#011111'}
                    margin={'5px 0 12px 80px'}
                    />
                    </div>
                <div className='action-row'>
                    <Text children="Category:" fontSize={'16px'} fontWeight={'500'} color={"#000000"} />
                    <Button title='Test Category'
                        width={'191px'}
                        height={'34px'}
                        borderRadius="8px"
                        color='white'
                        backgroundColor='#193051'
                        fontSize={16}
                        padding={'10px'}
                        fontWeight={'700'}
                        variant=''
                        margin={'0 0 0 14px'}
                    />
                </div>
            </div>

            <div className="action-footer">
                <Button title='Send Email to infosec team'
                    width={'237px'}
                    height={'40px'}
                    borderRadius="4px"
                    color='#FFFFFF'
                    backgroundColor='#467599'
                    fontSize={16}
                    padding={'8px'}
                    fontWeight={'600'}
                    margin='0 16px 0 0'
                    variant=''
                />
                <Button title='Send Email'
                    width={'119px'}
                    height={'40px'}
                    borderRadius="4px"
                    color='#FFFFFF'
                    backgroundColor='#467599'
                    fontSize={16}
                    padding={'8px'}
                    fontWeight={'600'}
                    variant=''
                />
            </div>
        </Action>
    )
}