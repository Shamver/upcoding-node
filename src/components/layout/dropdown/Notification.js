import React from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as mu from '@material-ui/core';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const DropdownMenuAni = styled(DropdownMenu)`
    margin-top : 10px;
    position : absolute;
    border : 0;
    width : 300px;
    height : 360px;
    transition : all 0.3s !important;
    box-shadow : 0 2px 5px rgba(0, 0, 0, 0.2);
    &.show {
        padding: 8px 0 !important;
    }
`;

const MenuCircle = styled.span`
    border : 1px solid #F1F1F1;
    border-radius : 50%;
    height : 30px;
    vertical-align : middle;
    padding : 8px;
    transition : all 0.3s;
    cursor : pointer;
    line-height : 2.5;
    
    &:hover {
        text-decoration: none;
        background: #e22a6f;
        border-color: #e22a6f;
        color: #fff;
    }
`;

const MenuButtonCircle = styled(mu.ListItem)`
    background-color : #f7f7f7 !important;
    height : 39px;
    width : 39px !important;
    color : inherit !important;
    border-radius : 50% !Important;
    display : inline-block !important;
    padding : 8px !important;
    text-align : center !important;
    font-family : inherit;
    
     &:hover {
        text-decoration: none !Important;
        background: #e22a6f !Important;
        border-color: #e22a6f !Important;
        color: #fff !Important;
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
    width : 21px !important;
    height : 16px;
`;

const DropdownInline = styled(Dropdown)`
    display : inline;
`;

const DropdownToggleCustom = styled(DropdownToggle)`
    background-color : RGBA(0,0,0,0);
    color : rgb(138, 138, 138);
    border : 0;
    padding : 0px;
    &:hover {
        background-color : RGBA(0,0,0,0);
    }
    
    &:focus {
        background-color : RGBA(0,0,0,0);
        box-shadow : none !important;
    }
    
    &:active {
        background-color : RGBA(0,0,0,0) !important;
        border : 0;
        color : inherit !important;
    }
`;

const DropdownItemHeader = styled(DropdownItem)`
    padding : 10px 20px;
    font-weight : 400;
    text-align : center;
    cursor : unset !important;
    font-family : 'Jeju Gothic', 'Roboto';
    margin-bottom : 8px;
    
    &:active {
        background-color : unset;
    }
    
    &:focus {
        outline : unset;
    }
`;


const Colorh6 = styled.div`
    line-height : 1.5;
    color : #515365;
    font-size : 17px !important;
`;

const DropDownItemCustom = styled(DropdownItem)`
    padding : 10px 20px;

    &:active {
        background-color : unset;
    }
    &:focus {
        outline : unset;
    }
`;

const DropdownItemFooter = styled(DropDownItemCustom)`
    margin-top : 10px;
`;

const Info = styled.div`
    padding-left: 55px;
    min-height: 40px;
    height: auto;
    position: relative;
    font-family : 'Jeju Gothic', 'Roboto';
`;

const ImgDiv = styled.div`
    position: relative;
    float: left;
    line-height: 1.5;
`;

const Name = styled.span`
    display: block;
    color: #515365;
    line-height: 1.5;
    font-size : 14px;
`;

const SubMessage = styled.span`
    display: block;
    font-size: 12.5px;
    color: #adadad;
    color: rgba(138, 138, 138, 0.7);
    max-width: 90%;
    line-height: 1.5;
    white-space : normal
`;

const FooterMessage = styled.span`
    display: block;
    font-size: 14px;
    text-align : center;
    line-height: 1.5;
    color: #8A8A8A
    font-family : 'Jeju Gothic', 'Roboto';
`;

const MenuCircleBell = styled(MenuCircle)`
    background-color: #e22a6f !important;
    border : 0;
    color : white;
`;

const MenuCircleComment = styled(MenuCircle)`
    background-color: #24d5d8 !important;
    border : 0;
    color : white;
`;

const MenuCircleFriend = styled(MenuCircle)`
    background-color: #00E676 !important;
    border : 0;
    color : white;
`;

const Notification = ({ HeaderStore }) => {
  const { isNotificationToggle } = HeaderStore.dropDownToggle;
  return (
    <DropdownInline isOpen={isNotificationToggle} toggle={HeaderStore.onToggleDropDownNoti}>
      <DropdownToggleCustom>
        <MenuButtonCircle button>
          <MenuIconCustomWrapper>
            <MenuIcon icon={fa.faBell} />
          </MenuIconCustomWrapper>
        </MenuButtonCircle>
      </DropdownToggleCustom>
      <DropdownMenuAni right>
        <DropdownItemHeader>
          <Colorh6>
            <MenuIcon icon={fa.faBell} />
            &nbsp;알림
          </Colorh6>
        </DropdownItemHeader>
        <DropDownItemCustom>
          <ImgDiv>
            <MenuCircleBell>
              <MenuIcon icon={fa.faEnvelope} />
            </MenuCircleBell>
          </ImgDiv>
          <Info>
            <Name>
              5개의 새로운 쪽지
            </Name>
            <SubMessage>4분 전</SubMessage>
          </Info>
        </DropDownItemCustom>
        <DropDownItemCustom>
          <ImgDiv className="media-img">
            <MenuCircleComment>
              <MenuIcon icon={fa.faCommentAlt} />
            </MenuCircleComment>
          </ImgDiv>
          <Info>
            <Name>
              4개의 새로운 댓글
            </Name>
            <SubMessage>12분 전</SubMessage>
          </Info>
        </DropDownItemCustom>
        <DropDownItemCustom>
          <ImgDiv className="media-img">
            <MenuCircleFriend>
              <MenuIcon icon={fa.faUserFriends} />
            </MenuCircleFriend>
          </ImgDiv>
          <Info>
            <Name>
              3개의 새로운 친구 요청
            </Name>
            <SubMessage>1일 전</SubMessage>
          </Info>
        </DropDownItemCustom>
        <DropDownItemCustom>
          <ImgDiv className="media-img">
            <MenuCircleMessage>
              <MenuIcon icon={fa.faComment} />
            </MenuCircleMessage>
          </ImgDiv>
          <Info>
            <Name>
              2개의 새로운 채팅
            </Name>
            <SubMessage>12분 전</SubMessage>
          </Info>
        </DropDownItemCustom>
        <DropdownItemFooter>
          <FooterMessage>모든 알림 확인하기</FooterMessage>
        </DropdownItemFooter>
      </DropdownMenuAni>
    </DropdownInline>
  );
};

const MenuCircleMessage = styled(MenuCircle)`
    background-color: #ab8ce4 !important;
    border : 0;
    color : white;
`;

const MenuIconCustomWrapper = styled.div`
    line-height : 22px !important;
    display : block;
`;

Notification.propTypes = {
  HeaderStore: PropTypes.shape({
    onToggleDropDownNoti: PropTypes.func.isRequired,
    dropDownToggle: PropTypes.shape({
      isNotificationToggle: PropTypes.bool.isRequired,
    }),
  }),
};

Notification.defaultProps = {
  HeaderStore: null,
};


export default inject('HeaderStore')(observer(Notification));
