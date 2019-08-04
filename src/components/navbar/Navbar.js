import React from 'react';
import { Col, Row } from 'reactstrap';
import { ListItem } from '@material-ui/core';
import styled from 'styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import NavItem from './NavItem';

const TextSpan = styled.span`
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0.05s' : '0')}
    }
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0' : '0.1s')}
    }
`;

const NavBody = styled(Col)`
    font-family : "Jeju Gothic", 'Roboto';
`;

const NavRow = styled(Row)`
    margin: 0;
`;

const LeftIconSpan = styled.span`
    vertical-align : sub;
    display: inline-block;
    height: 20px;
    width: ${({ toggled }) => (toggled === 'true' ? '35px' : '24px')};
    line-height: 25px;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    left: 0;
    font-size: 18px;
    padding-right: ${({ toggled }) => (toggled === 'true' ? '2px' : '0')};
    margin-right: 14px;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    line-height : 30px;
    vertical-align : unset;
`;

const CollapseButton = styled(ListItem)`
    width: 100% !important;
    height: 47px !important;
    padding: 10px 15px !important;
    position: relative !important;
    margin: 0 !important;
    background-color: #1a2942 !important;
    color: white !important;
    border: none !important;
    border-radius: 0 !important;
    outline: none !important;
    box-shadow: none !important;
    font-size: 17px !important;
    text-align: left !important;
    display : block !important;
    font-family : inherit !important;
    line-height : 30px;
    
    &.active {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &:hover {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &.disabled {
        &:hover {
            cursor: not-allowed !important;
        }
    }
`;

const SideItemCol = styled(Col)`
    color: white;
    text-align: center;
    text-vertical: middle;
    padding: 0;
    
    @media only screen and (max-width: 1200px){
        opacity: ${({ toggled }) => (toggled === 'true' ? 100 : 0)}
        transition: opacity 0.2s;
        transition-delay: 0.08s;
    }
    
    @media only screen and (min-width: 1200px) {
        transition: opacity 0.2s;
        transition-delay: 0.08s;
        opacity: 100;
    }
`;

const Navbar = (props) => {
  const { menus, NavbarStore } = props;
  const { selectedCollapse } = NavbarStore;
  const items = menus.map(data => (
    <NavItem
      title={data.head}
      icon={data.icon}
      items={data.items}
      key={data.id}
    />
  ));
  const isOpen = selectedCollapse === 'home';
  return (
    <React.Fragment>
      <div>
        <NavRow>
          <NavBody xs="12">
            <Row>
              <SideItemCol toggled={NavbarStore.isToggleSidebar.toString()} xs={12}>
                <CollapseButton
                  button
                  className={isOpen ? 'active' : ''}
                  name="home"
                  onClick={NavbarStore.onSelectCollapse}
                >
                  <LeftIconSpan
                    name="home"
                    toggled={NavbarStore.isToggleSidebar.toString()}
                    aa={false}
                  >
                    <LeftIcon icon={faHome} name="home" />
                  </LeftIconSpan>
                  <TextSpan toggled={NavbarStore.isToggleSidebar.toString()} name="home">홈</TextSpan>
                </CollapseButton>
              </SideItemCol>
              {items}
            </Row>
          </NavBody>
        </NavRow>
      </div>
    </React.Fragment>
  );
};
Navbar.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ).isRequired,
  NavbarStore: PropTypes.shape({
    selectedCollapse: PropTypes.string.isRequired,
    selectedSidebar: PropTypes.string.isRequired,
    onSelectCollapse: PropTypes.func.isRequired,
    onSelectSidebar: PropTypes.func.isRequired,
    isToggleSidebar: PropTypes.bool,
  }),
};

Navbar.defaultProps = {
  NavbarStore: null,
};

export default inject('NavbarStore')(observer(Navbar));
