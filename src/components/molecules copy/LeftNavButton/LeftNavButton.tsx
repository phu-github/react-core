import React from 'react';
import  { useNavigate } from 'react-router-dom';
import {LeftNavButtonProps} from './LeftNavButton.props';
import './LeftNavButton.styles.css';
import {Button} from "../../atoms/Button";
import {Image} from "../../atoms/Image";
import {Images} from "../../../configs/images";
import {Text} from "../../atoms/Text"


export const LeftNavButton: React.FC<LeftNavButtonProps> = ({
  leftNavBtnArr,
  isOpen,
  setOpenNav
}) => {

  const navigate = useNavigate();
  return (
      <div className={`left-nav fixed ${isOpen? 'opened' : ''}`}>
          {
              isOpen ? <Button borderRadius={"50%"}
                              height={24}
                              width={24}
                              backgroundColor={"#E6E7E7"}
                              linkIcon={Images.ArrowRight}
                              iconWidth={12} iconHeigth={12}
                              onClick={setOpenNav}
                              variant='arrow-right-nav'
              /> : <Button borderRadius={"50%"}
                          height={24}
                          width={24}
                          backgroundColor={"#E6E7E7"}
                          linkIcon={Images.Arrowleft}
                          iconHeigth={12}
                          onClick={setOpenNav}
                          variant='arrow-left-nav'
              />
          }
          <div>
              <div className={"left-nav-header"}>
                  <Image srcImg={Images.DarkLogo} height={28} width={88}/>
              </div>
              <div className={"left-nav-content"}>
                  <Image srcImg={Images.GrayImage} height={80} width={193}/>
                  <Text children={"NAB - National Australia hello"}
                        margin={"8px 0 0 0"}
                        color={"#193051"}
                        fontWeight={600}
                  />
              </div>
              <div className="button-section-group ">
                  {
                      leftNavBtnArr?.map(( btn:any, index) =>
                          <Button color='#677070'
                                  variant={"left-nav-btn"}
                                  fontSize={14}
                                  fontWeight={500}
                                  padding={"0 16px"}
                                  border={"none"}
                                  backgroundColor={'#fff'}
                                  onClick={() => navigate(btn.href)}
                                  title={btn.name}
                                  key={index}
                                  linkIcon={btn.linkIcon }
                                  borderRadius={"4px"}
                                  height={48}

                          />)
                  }
              </div>
          </div>
      </div>
  );
};
