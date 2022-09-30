import { ComponentMeta,ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Textarea } from "../../atoms/TextArea";
import { TextInput } from "../../atoms/TextInput";
import { PriorityMessage } from "./PriorityMessage";
import { Images } from '../../../configs/images';

export default {
    title: 'Molecules/PriorityMessage',
    component: PriorityMessage,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },

    }
} as ComponentMeta<typeof PriorityMessage>;

export const Unknown: ComponentStory<typeof PriorityMessage> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)

    const disableBorder = isEditable === true ? ' transparent' : '';

    return (
        <PriorityMessage {...args} onEditEvent={() => setIsEditable(!isEditable)}>
            <div className="priority-wrapper">
                <div className="form-message-wrapper">
                    <TextInput
                        typeInput='text'
                        width={'100%'}
                        height={'30px'}
                        fontSize={'24px'}
                        fontWeight='700'
                        padding="0"
                        nameInput='message-content'
                        isDisabled={isEditable}
                        borderColor={disableBorder}
                        value={args.titleMessage} />
                    <TextInput
                        width={'100%'}
                        height={'30px'}
                        margin='0'
                        fontSize={'20px'}
                        fontWeight='700'
                        padding="0"
                        typeInput='text'
                        nameInput='message-content'
                        isDisabled={isEditable}
                        borderColor={disableBorder}
                        value={args.subTitle}
                    />
                    <Textarea
                        cols={3}
                        rows={1}
                        isDisable={isEditable}
                        backgroundColor='transparent'
                        borderColor={disableBorder}
                        color={'black'}
                        width={'370px'}
                        height={'50px'}
                        margin={'10px 0 0 0'}
                        fontSize={'16px'}
                        fontFamily={'Montserrat'}
                        value={args.bodyMessage}
                    >
                    </Textarea>
                </div>
                <div className="btn-edit-msg">

                </div>
            </div>

        </PriorityMessage>
    )
};

Unknown.args = {
    height: 161.14,
    width: 610,
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    color: 'black',
    titleMessage: 'Unknown',
    subTitle: '',
    bodyMessage: 'Select one priority for the message'
}

export const High: ComponentStory<typeof PriorityMessage> = (args: any) => {
    const [isEditable, setIsEditable] = useState(true)

    const disableBorder = isEditable === true ? ' transparent' : '';
    const onEditEvent=() => {
        setIsEditable(!isEditable)
    }
    return (
        <PriorityMessage {...args}
            color={"#FFFFFF"}
        >
            <div className={'priority-wrapper'}>
                <div className="form-message-wrapper">
                    <TextInput
                        typeInput='text'
                        width={'100%'}
                        height={'30px'}
                        fontSize={'24px'}
                        fontWeight='700'
                        padding="0"
                        color={"#FFFFFF"}
                        nameInput='message-content'
                        isDisabled={isEditable}
                        borderColor={disableBorder}
                        value={args.titleMessage} />
                    <TextInput
                        width={'100%'}
                        height={'30px'}
                        margin='0'
                        fontSize={'20px'}
                        fontWeight='700'
                        color={"#FFFFFF"}
                        borderColor={disableBorder}
                        padding="0"
                        typeInput='text'
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.subTitle}
                    />
                    <Textarea
                        cols={3}
                        rows={1}
                        isDisable={isEditable}
                        borderColor={disableBorder}
                        backgroundColor='transparent'
                        color={"#FFFFFF"}
                        width={500}
                        height={'50px'}
                        margin={'10px 0 0 0 '}
                        fontSize={'16px'}
                        fontFamily={'Montserrat'}
                        value={args.bodyMessage}
                    >
                    </Textarea>
                </div>
                <div className="btn-edit-msg">
                    <Button onClick={onEditEvent} variant='only-icon' width={24} height={24} margin={'0 10px'} backgroundColor='#FFFFFF' linkIcon={!isEditable === false ? Images.UpdateIcon : Images.Edit}/>
                </div>
            </div>
        </PriorityMessage>
    )
};

High.args = {
    height: 161.14,
    width: 610,
    backgroundColor: '#B00020',
    padding: 20,
    margin: 20,
    color: '#FFFFFF',
    titleMessage: 'High priority message',
    subTitle: '(Potential threats)',
    bodyMessage: 'Potentially malicious and may require further analysis by infosec team'
}


export const Medium: ComponentStory<typeof PriorityMessage> = (args: any) => {
    const [isEditable, setIsEditable] = useState(false)
    const disableBorder = isEditable === true ? 'transparent' : '';
    const onEditEvent=() => {
        setIsEditable(!isEditable)
    }
    return (
        <PriorityMessage {...args}
        >
            <div className='priority-wrapper'>
                <div className='form-message-wrapper'>
                    <TextInput
                        typeInput='text'
                        width={'100%'}
                        height={'30px'}
                        fontSize={'24px'}
                        fontWeight='700'
                        padding="0"
                        color="#011111"
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.titleMessage} />
                    <TextInput
                        width={'100%'}
                        height={'30px'}
                        margin='0'
                        fontSize={'20px'}
                        fontWeight='700'
                        padding="0"
                        color="#011111"
                        typeInput='text'
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.subTitle}
                    />
                    <Textarea
                        cols={3}
                        rows={1}
                        isDisable={isEditable}
                        borderColor={disableBorder}
                        backgroundColor='transparent'
                        color={'#011111'}
                        width={'370px'}
                        height={'50px'}
                        margin={'10px 0 0 0 '}
                        fontSize={'16px'}
                        fontFamily={'Montserrat'}
                        value={args.bodyMessage}
                    >
                    </Textarea>
                </div>
                <div className={'btn-edit-msg'}>
                    <Button onClick={onEditEvent} variant='only-icon' width={24} height={24} margin={'0 10px'} backgroundColor='#FFFFFF' linkIcon={isEditable === false ? Images.UpdateIcon : Images.Edit}/>
                </div>
            </div>
        </PriorityMessage>
    )
};

Medium.args = {
    height: '161.14px',
    width: '610px',
    backgroundColor: '#FCAB10',
    color: '#011111',
    padding: 20,
    margin: 20,
    titleMessage: 'Medium priority message',
    subTitle: '(Clean email)',
    bodyMessage: 'Automatically return messages to reporter that are considered to be safe or non-threatening.'
}


export const Low: ComponentStory<typeof PriorityMessage> = (args: any) => {
    const [isEditable, setIsEditable] = useState(false)
    const disableBorder = isEditable === true ? 'transparent' : '';
    const handleEdit = () => {
        setIsEditable(!isEditable);
    }
    return (
        <PriorityMessage {...args}>
            <div className={'priority-wrapper'}>
                <div className="form-message-wrapper">
                    <TextInput
                        typeInput='text'
                        width={'100%'}
                        height={'30px'}
                        fontSize={'24px'}
                        fontWeight='700'
                        padding="0"
                        color="#011111"
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.titleMessage} />
                    <TextInput
                        width={'100%'}
                        height={'30px'}
                        margin='0'
                        fontSize={'20px'}
                        fontWeight='700'
                        padding="0"
                        color="#011111"
                        typeInput='text'
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.subTitle}
                    />
                    <Textarea
                        cols={3}
                        rows={1}
                        isDisable={isEditable}
                        borderColor={disableBorder}
                        backgroundColor='transparent'
                        color={'#011111'}
                        width={'370px'}
                        height={'50px'}
                        margin={'10px 0 0 0 '}
                        fontSize={'16px'}
                        fontFamily={'Montserrat'}
                        value={args.bodyMessage}
                    >
                    </Textarea>
                </div>
                <div className="btn-edit-msg">
                    <Button onClick={handleEdit} variant='only-icon' width={24} height={24} margin={'0 10px'} backgroundColor='#FFFFFF' linkIcon={isEditable === false ? Images.UpdateIcon : Images.Edit}/>

                </div>
            </div>
        </PriorityMessage>

    )
};

Low.args = {
    height: '161.14px',
    width: '610px',
    backgroundColor: '#9DC914',
    color: '#011111',
    padding: 20,
    margin: 20,
    titleMessage: 'Low priority',
    subTitle: '(Spam)',
    bodyMessage: 'Rule out messages that are determined to be unsolicited or unwanted but not likely to be malicious'
}

export const SuperHigh: ComponentStory<typeof PriorityMessage> = (args: any) => {
    const [isEditable, setIsEditable] = useState(false);
    const disableBorder = isEditable === true ? 'transparent' : '';
    const handleEdit = () => {
        setIsEditable(!isEditable)
    }
    return (
        <PriorityMessage {...args} >
            <div className="priority-wrapper">
                <div className="form-message-wrapper">
                    <TextInput
                        typeInput='text'
                        width={'100%'}
                        height={'30px'}
                        fontSize={'24px'}
                        fontWeight='700'
                        padding="0"
                        color="#FFFFFF"
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.titleMessage} />
                    <TextInput
                        width={'100%'}
                        height={'30px'}
                        margin='0'
                        fontSize={'20px'}
                        fontWeight='700'
                        padding="0"
                        color="#FFFFFF"
                        typeInput='text'
                        borderColor={disableBorder}
                        isDisabled={isEditable}
                        nameInput='message-content'
                        value={args.subTitle}
                    />
                    <Textarea
                        cols={3}
                        rows={1}
                        isDisable={isEditable}
                        borderColor={disableBorder}
                        backgroundColor='transparent'
                        color={'#FFFFFF'}
                        width={'370px'}
                        height={'50px'}
                        margin={'10px 0 0 0 '}
                        fontSize={'16px'}
                        fontFamily={'Montserrat'}
                        value={args.bodyMessage}
                    >
                    </Textarea>
                </div>
                <div className="btn-edit-msg">
                    <Button onClick={handleEdit} variant='only-icon' width={24} height={24} margin={'0 10px'} backgroundColor='#FFFFFF' linkIcon={isEditable === false ? Images.UpdateIcon : Images.Edit}/>
                </div>
            </div>
        </PriorityMessage>
    )
};

SuperHigh.args = {
    height: 161.14,
    width: 610,
    backgroundColor: '#9FD8DB',
    color: '#FFFFFF',
    padding: 20,
    margin: 20,
    titleMessage: 'Super high message',
    subTitle: '(Test Short Meaning)',
    bodyMessage: 'Test description',
}