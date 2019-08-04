import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Message from './dropdown/Message';
import logo from '../../resources/images/shamver_upcoding.png';
import logoText from '../../resources/images/LOGO.png';
import Notification from './dropdown/Notification';
import Profile from './dropdown/Profile';

const Header = ({ icon, NavbarStore }) => (
  <SectionHeader>
    <AllLogoWrapper>
      <LogoWrapper>
        <LogoImage src={logo} />
      </LogoWrapper>
      <LogoTextWrapper>
        <LogoTextImage src={logoText} />
      </LogoTextWrapper>
    </AllLogoWrapper>
    <CollapseButton>
      <MenuButtonCircle button onClick={NavbarStore.onToggleSidebar}>
        <MenuIconCustomWrapper>
          <MenuIconCustom icon={icon} />
        </MenuIconCustomWrapper>
      </MenuButtonCircle>
    </CollapseButton>
    <LeftNav>
      <SearchBoxList>
        <SearchBox placeholder="검색할 키워드를 입력해주세요.." />
        <SearchIcon icon={faSearch} />
      </SearchBoxList>
      <List>
        <CollapseButton>
          <Message />
        </CollapseButton>
      </List>
      <List>
        <CollapseButton>
          <Notification />
        </CollapseButton>
      </List>
      <List>
        <CollapseButton>
          <Profile />
        </CollapseButton>
      </List>
    </LeftNav>

  </SectionHeader>
);

Header.propTypes = {
  icon: PropTypes.shape({
  }).isRequired,
  NavbarStore: PropTypes.shape({
    onToggleSidebar: PropTypes.func.isRequired,
  }),
};

Header.defaultProps = {
  NavbarStore: null,
};

const LogoImage = styled.img`
    width : 40px;
    cursor : pointer;
    vertical-align : middle;
`;

const LogoTextImage = styled.img`
    height : 40px;
    cursor : pointer;
    vertical-align : middle;
`;

const LogoWrapper = styled.b`
    width : 60px;
    height : 60px;
    line-height : 60px;
    display : inline-block;
    text-align : center;
`;

const LogoTextWrapper = styled(LogoWrapper)`
    width : 250px;
    text-align : left;
`;

const AllLogoWrapper = styled.div`
    float : left;
    display : flex;
    width : 270px;
    @media (max-width: 992px) {
        display : none;
    }
`;

const SectionHeader = styled.div`
    position : fixed;
    z-index : 1000;
    width : 100%;
    background : #FFFFFF;
    height : 65px;
    border-bottom: 1px solid #E9EAEC;
    color : #8A8A8A;
    
    @media (max-width: 992px) {
        padding : 0px 15px;
    }
`;

const CollapseButton = styled.a`
    padding : 0 6px;
    line-height: calc(65px - 3px);
    min-height: calc(65px - 3px);
`;

const MenuButtonCircle = styled(ListItem)`
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
    vertical-align : middle;
`;

const SearchIcon = styled(FontAwesomeIcon)`
    position : absolute;
    right : 13px;
    top : 23px;
    cursor : pointer;
     &:hover {
        color : #e22a6f;
    }
`;

const LeftNav = styled.ul`
    float : right;
    position : relative;
    margin-right : 30px;
    position: relative;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0px;
    @media only screen and (max-width: 1200px){
       margin : 0px;
    }
`;

const List = styled.li`
    float : left;
    display : inline;
`;

const SearchBoxList = styled(List)`
    margin-right : 20px;
    position : relative;
    @media (max-width: 767px) {
        display : none;
    }
    font-family : 'Jeju Gothic', 'Roboto';
`;

const SearchBox = styled.input`
    border: 1px solid #f1f1f1;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;
    height: 40px;
    margin-top: 12px;
    padding: 5px 20px;
    font-size: 14px;
    width: 250px;
    border-radius: 30px;
    transition : all 0.3s; 
    &:focus {
        border-color: #e22a6f;
    }
`;

const MenuIconCustom = styled(MenuIcon)`
    @media only screen and (max-width: 1200px){
        transform: rotate( 180deg );
    }
`;

const MenuIconCustomWrapper = styled.div`
    line-height : 19px !important;
    display : block;
`;

export default inject('HeaderStore', 'NavbarStore')(observer(Header));
