import React, {useState, useEffect} from 'react'
import { Card } from '../../molecules/Card'
import { RightInboxProps } from './RightInbox.props'
import './RightInbox.styles.css';
import {Summary} from "../Summary";
import {PriorityMessage} from "../../molecules/PriorityMessage";
import {TextInput} from "../../atoms/TextInput";
import {Textarea} from "../../atoms/TextArea";
import {Button} from "../../atoms/Button";
import {Images} from "../../../configs/images";
import {Text} from "../../atoms/Text";
import {Action} from "../Action";
import {ThreatScore} from "../ThreatScore";
import {VisrusScanResult} from "../VisrusScanResults";
import {InboxHeaders} from "../InboxHeaders";
import {InboxOthers} from "../InboxOthers";
import moment from 'moment';
import { Image } from '../../../components/atoms/Image';

export const RightInbox:React.FC<RightInboxProps> = ({
    inboxDetailData,
    width,
    height,
    bodyMessage ,
    backgroundColor
}) => {
    const [isEditable, setIsEditable] = useState(true)
    const disableBorder = isEditable === true ? 'transparent' : '';
    const onEditEvent = () => {
        setIsEditable(!isEditable);
    }
    return (
      <Card
        height ={height}
        width={width}
        backgroundColor={backgroundColor}
      >
          <div className='grid-container'>
              <div className='grid-item'>
                  <Summary
                    title="Summary"
                    txtColor="#193051"
                    borderColor="#808888"
                    border="1px solid"
                    padding={'16.23px 22px 11px'}
                    fontSize={'24px'}
                    height={262}
                    width={676}
                    fontFamily={"Righteous"}
                    fontWeight="400"
                  >

                      <PriorityMessage
                        // @ts-ignore
                        titleMessage={inboxDetailData  || ' '}
                        width={610}
                        backgroundColor={"#B00020"}
                        padding={'13.5px 16px'} color={"#FFFFFF"}
                        margin={"6.99px 0 14px 0"}
                        onEditEvent={() => {
                            setIsEditable(!isEditable)
                        }}
                        btnMargin={'18.5px 0 0 0'}
                      >
                          <div className={'priority-wrapper'}>
                              <div className="form-message-wrapper">
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
                                    value={
                                        // @ts-ignore
                                        inboxDetailData && inboxDetailData?.subject["S"] || ' '
                                    }
                                  />
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
                                    value={
                                        // @ts-ignore
                                        inboxDetailData && inboxDetailData?.priority["S"]
                                    }
                                    color="#FFFFFF"
                                  />
                                  <Textarea
                                    cols={3}
                                    rows={1}
                                    isDisable={isEditable}
                                    borderColor={disableBorder}
                                    backgroundColor='transparent'
                                    color={"#FFFFFF"}
                                    width={500}
                                    height={40}
                                    margin={'10px 0 0 0 '}
                                    fontSize={'16px'}
                                    fontFamily={'Montserrat'}
                                  >
                                      {bodyMessage}
                                  </Textarea>
                              </div>
                              <div className="btn-edit-msg">
                                  <Button onClick={onEditEvent} variant='only-icon' width={24} height={24}
                                          margin={'0 10px'} backgroundColor='#FFFFFF'
                                          linkIcon={isEditable === false ? Images.UpdateIcon : Images.Edit}/>
                              </div>
                          </div>
                      </PriorityMessage>
                      <div className={'summary-report-wrapper'}>
                          <div className='summary-reported'>
                              <Text children={`Reported: ${
                                // @ts-ignore
                                moment.unix(inboxDetailData && inboxDetailData.reported_at["N"]).format('L')
                              }`} fontSize={12} fontWeight={'500'}/>
                              <Text children={`Reported by: ${
                                // @ts-ignore
                                inboxDetailData && inboxDetailData?.reported_by["S"] || ''
                                // @ts-ignore
                              }(${inboxDetailData && inboxDetailData?.reported_by["S"] || ''})`} fontSize={12}
                                    fontWeight={'500'} margin={'0 0 0 32px'}/>
                          </div>
                          <div className="summary-from-reporter">
                              <Text children={`From: ${
                                // @ts-ignore
                                inboxDetailData && inboxDetailData?.email_from['S'] || ''
                              }`} fontSize={12} fontWeight={'500'}/>
                          </div>
                      </div>
                  </Summary>
              </div>

              <div className='grid-item'>
                  <Action
                    titleMargin={'0 0 7px 0'}
                    padding={'14px 31px 22px 17px'}
                  >
                      <div className="action-container">
                          <div className='action-row'>
                              <Text children="Status" fontSize={'16px'} fontWeight={'500'} color={"#000000"}/>

                              {
                                  // @ts-ignore
                                  inboxDetailData && inboxDetailData?.status["S"] && <Button title={
                                      // @ts-ignore
                                      inboxDetailData && inboxDetailData?.status["S"]
                                  }
                                          width={109}
                                          height={34}
                                          borderRadius="8px"
                                          color='white'
                                          backgroundColor='#193051'
                                          fontSize={16}
                                          titleMargin={0}
                                          fontWeight={'700'}
                                          variant=''
                                          margin={'0 0 0 36px'}
                                  />
                              }
                          </div>
                          <div className="action-row" style={{margin: '0 0 0 86px'}}>
                              <Text
                                children="Potentially malicious and may require further analysis by infosec team"
                                fontSize={'12px'}
                                fontWeight={'500'}
                                color={'#011111'}
                                margin={'5px 0 12px 0'}
                              />
                          </div>

                          <div className='action-row'>
                              <Text children="Category" fontSize={'16px'} fontWeight={'500'} color={"#000000"}/>
                              {
                                  // @ts-ignore
                                  inboxDetailData && inboxDetailData?.category["S"] && <Button title={
                                      // @ts-ignore
                                      inboxDetailData && inboxDetailData?.category["S"]
                                  }
                                          width={'109px'}
                                          height={'34px'}
                                          borderRadius="8px"
                                          color='white'
                                          backgroundColor='#193051'
                                          fontSize={16}
                                          fontWeight={'700'}
                                          variant=''
                                          margin={'0 0 0 14px'}
                                  />
                              }
                          </div>
                      </div>
                      <div className="action-footer">
                          <Button title='Send Email to infosec team'
                                  width={253}
                                  height={40}
                                  borderRadius="4px"
                                  color='#FFFFFF'
                                  backgroundColor='#467599'
                                  titleMargin={0}
                                  fontSize={16}
                                  fontWeight={600}
                                  variant=''
                          />
                      </div>
                  </Action>
              </div>

              <div className='grid-item'>
                  <ThreatScore/>
                  <VisrusScanResult/>
              </div>

              <div className='grid-item'>
                  <InboxHeaders>
                      {
                          // @ts-ignore
                          inboxDetailData && inboxDetailData?.header_content["S"]
                      }
                  </InboxHeaders>
              </div>

              <div className='grid-item'>
                  <InboxOthers/>
              </div>
          </div>
      </Card>
    )
}
