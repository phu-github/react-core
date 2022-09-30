import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../atoms/Button";
import { Textarea } from "../../atoms/TextArea";
import { TextInput } from "../../atoms/TextInput";
import { PriorityMessage } from "../../molecules/PriorityMessage";
import { Summary } from "./Summary";
import {Text} from "../../atoms/Text";

export default {
    title: 'organisms/Summary',
    component: Summary,
} as ComponentMeta<typeof Summary>;


export const Unknown: ComponentStory<typeof Summary> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';

    return (
        <Summary {...args}
            title="Summary"
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={19}
            width={'676px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400">

            <PriorityMessage
                height={161.14}
                width={610}
                backgroundColor={"#FFFFFF"}
                padding={10} color={"#011111"}
                margin={"15px 0 0 0"}
                onEditEvent={() => {
                    setIsEditable(!isEditable)
                }}
            >
                <div className="priority-wrapper">
                    <div className="form-message-wrapper">
                        <TextInput
                            typeInput='text'
                            width={'100%'}
                            height={'30px'}
                            fontSize={'24px'}
                            fontWeight='700'
                            padding="0"
                            borderColor={disableBorder}
                            isDisabled={isEditable}
                            nameInput='message-content'
                            color="#011111"
                            value={"Unknown"} />
                        <TextInput
                            width={'100%'}
                            height={'18px'}
                            margin='0'
                            fontSize={'16px'}
                            fontWeight='700'
                            padding="0"
                            borderColor={disableBorder}
                            isDisabled={isEditable}
                            typeInput='text'
                            nameInput='message-content'
                            value={""}
                            color="#011111"
                        />
                        <Textarea
                            cols={3}
                            rows={1}
                            isDisable={isEditable}
                            borderColor={disableBorder}
                            backgroundColor='transparent'
                            color={"#011111"}
                            width={'370px'}
                            height={'24px'}
                            margin={'10px 0 0 0 '}
                            fontSize={'16px'}
                            fontFamily={'Montserrat'}
                            value={'Select one priority for the message'}
                        >
                        </Textarea>
                    </div>
                </div>
                <div className="summary-group-btn">
                    <Button
                    variant=""
                    fontSize={24}
                    fontWeight={'700'}
                    color={'#193051'}
                    width={'106.84px'}
                    height={'54px'}
                    backgroundColor={'#FFFFFF'}
                    border={'1px solid #000000'}
                    borderRadius={"8px"}
                    title="High"
                    textAlign={'center'}
                    />
                    <Button
                    variant=""
                    fontSize={24}
                    fontWeight={'700'}
                    color={'#193051'}
                    width={'148.93px'}
                    height={'54px'}
                    backgroundColor={'#FFFFFF'}
                    border={'1px solid #000000'}
                    borderRadius={"8px"}
                    title="Medium"
                    margin={'0 0 0 21.04px'}
                    textAlign={'center'}
                    />
                    <Button
                    variant=""
                    fontSize={24}
                    fontWeight={'700'}
                    color={'#193051'}
                    width={'105.23px'}
                    height={'54px'}
                    backgroundColor={'#FFFFFF'}
                    border={'1px solid #000000'}
                    borderRadius={"8px"}
                    title="Low"
                    margin={'0 0 0 21.04px'}
                    textAlign={'center'}

                    />

                </div>
            </PriorityMessage>

        </Summary>
    )
}

export const High:ComponentStory<typeof Summary> = (args) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';
    return (
        <Summary {...args}
            title="Summary"
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={19}
            width={'676px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400"
        >
            <PriorityMessage
                height={134}
                width={610}
                backgroundColor={"#B00020"}
                padding={'13.5px 16px'} color={"#FFFFFF"}
                margin={"6.99px 0 14px 0"}
                onEditEvent={() => {
                    setIsEditable(!isEditable)
                }}
                btnMargin={'18.5px 0 0 0'}
            >
                <TextInput
                    typeInput='text'
                    width={'100%'}
                    height={'30px'}
                    fontSize={'24px'}
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    fontWeight='700'
                    padding="0"
                    nameInput='message-content'
                    color="#FFFFFF"
                    value={"High priority message"} />
                <TextInput
                    width={'100%'}
                    height={'18px'}
                    margin='0'
                    fontSize={'16px'}
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    fontWeight='700'
                    padding="0"
                    typeInput='text'
                    nameInput='message-content'
                    value={"(Potential threats)"}
                    color="#FFFFFF"
                />
                <Textarea
                    cols={3}
                    rows={1}
                    isDisable={isEditable}
                    borderColor={disableBorder}
                    backgroundColor='transparent'
                    color={"#FFFFFF"}
                    width={'370px'}
                    height={'50px'}
                    margin={'10px 0 0 0 '}
                    fontSize={'16px'}
                    fontFamily={'Montserrat'}
                    value={`Potentially malicious and may require further analysis by infosec team`}
                >
                </Textarea>
            </PriorityMessage>
            <div className={'summary-report-wrapper'}>
                <div className={'summary-reported'}>
                    <Text children={'Reported: 02/08/2022'} fontSize={12} fontWeight={'500'}/>
                </div>
                <div className={'summary-reported-by'}>
                    <Text children={'Reported by: Peter Pan (peter.pan@mail.com)'} fontSize={12} fontWeight={'500'}/>
                </div>
                <div className="summary-from-reporter">
                    <Text children={'From: John Wick (john.wick@mail.com)'} fontSize={12} fontWeight={'500'}/>
                </div>
            </div>
        </Summary>
    )
}

export const Medium: ComponentStory<typeof Summary> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';
    return (
        <Summary {...args}
            title="Summary"
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={19}
            width={'676px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400"
        >
            <PriorityMessage
                height={161.14}
                width={610}
                backgroundColor={"#FCAB10"}
                padding={10} color={"#011111"}
                margin={"15px 0 0 0"}
                onEditEvent={() => {
                    setIsEditable(!isEditable)
                }}
            >
                <TextInput
                    typeInput='text'
                    width={'100%'}
                    height={'30px'}
                    fontSize={'24px'}
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    fontWeight='700'
                    padding="0"
                    nameInput='message-content'
                    color="#011111"
                    value={"Medium priority message"} />
                <TextInput
                    width={'100%'}
                    height={'18px'}
                    margin='0'
                    fontSize={'16px'}
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    fontWeight='700'
                    padding="0"
                    typeInput='text'
                    nameInput='message-content'
                    value={"(Clean email)"}
                    color="#011111"
                />
                <Textarea
                    cols={3}
                    rows={1}
                    isDisable={isEditable}
                    borderColor={disableBorder}
                    backgroundColor='transparent'
                    color={"#011111"}
                    width={'370px'}
                    height={'50px'}
                    margin={'10px 0 0 0 '}
                    fontSize={'16px'}
                    fontFamily={'Montserrat'}
                    value={`Automatically return messages to reporter that are considered to be safe or non-threatening.`}
                >
                </Textarea>
            </PriorityMessage>
        </Summary>
    )
}

export const Low: ComponentStory<typeof Summary> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';

    return (
        <Summary {...args}
            title="Summary"
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={19}
            width={'676px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400"
        >
            <PriorityMessage
                height={161.14}
                width={610}
                backgroundColor={"#9DC914"}
                padding={10}
                margin={"15px 0 0 0"}
                onEditEvent={() => {
                    setIsEditable(!isEditable)
                }}
            >
                <TextInput
                    typeInput='text'
                    width={'100%'}
                    height={'30px'}
                    fontSize={'24px'}
                    fontWeight='700'
                    padding="0"
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    nameInput='message-content'
                    color="#011111"
                    value={"Low priority"} />
                <TextInput
                    width={'100%'}
                    height={'18px'}
                    margin='0'
                    fontSize={'16px'}
                    fontWeight='700'
                    padding="0"
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    typeInput='text'
                    nameInput='message-content'
                    value={"(Spam)"}
                    color="#011111"
                />
                <Textarea
                    cols={3}
                    rows={1}
                    isDisable={isEditable}
                    borderColor={disableBorder}
                    backgroundColor='transparent'
                    color={"#011111"}
                    width={'370px'}
                    height={'50px'}
                    margin={'10px 0 0 0 '}
                    fontSize={'16px'}
                    fontFamily={'Montserrat'}
                    value={'Rule out messages that are determined to be unsolicited or unwanted but not likely to be malicious'}
                >
                </Textarea>
            </PriorityMessage>
        </Summary>
    )
}

export const SuperHigh: ComponentStory<typeof Summary> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';

    return (
        <Summary {...args}
            title="Summary"
            txtColor="#193051"
            borderColor="#808888"
            border="1px solid"
            padding={19}
            width={'676px'}
            fontSize={'24px'}
            fontFamily={"Righteous"}
            fontWeight="400"
        >
            <PriorityMessage
                height={161.14}
                width={610}
                backgroundColor={"#9FD8DB"}
                padding={10}
                margin={"15px 0 0 0"}
                onEditEvent={() => {
                    setIsEditable(!isEditable)
                }}
            >
                <TextInput
                    typeInput='text'
                    width={'100%'}
                    height={'30px'}
                    fontSize={'24px'}
                    fontWeight='700'
                    padding="0"
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    nameInput='message-content'
                    color="#FFFFFF"
                    value={"Super high message"} />
                <TextInput
                    width={'100%'}
                    height={'18px'}
                    margin='0'
                    fontSize={'16px'}
                    fontWeight='700'
                    padding="0"
                    borderColor={disableBorder}
                    isDisabled={isEditable}
                    typeInput='text'
                    nameInput='message-content'
                    value={"(Test Short Meaning)"}
                    color="#FFFFFF"
                />
                <Textarea
                    cols={3}
                    rows={1}
                    isDisable={isEditable}
                    borderColor={disableBorder}
                    backgroundColor='transparent'
                    color={"#FFFFFF"}
                    width={'370px'}
                    height={'50px'}
                    margin={'10px 0 0 0 '}
                    fontSize={'16px'}
                    fontFamily={'Montserrat'}
                    value={'Test description'}
                >
                </Textarea>
            </PriorityMessage>
        </Summary>
    )
}




