import React from 'react';
import * as rs from 'reactstrap';
import * as mu from '@material-ui/core';
import styled from 'styled-components';

import * as fa from '@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import NavItem from './NavItem';

import TextSpan from '../../style/navbar/TextSpan';
import SideItemCol from '../../style/navbar/SideItemCol';

const NavBody = styled(rs.Col)`
    font-family : "Jeju Gothic", 'Roboto';
`;

const NavRow = styled(rs.Row)`
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

const CollapseButton = styled(mu.ListItem)`
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

const Navbar = (props) => {
  const {
    menus, selectedCollapse, selectedSidebar,
    onSelectCollapse, onSelectSidebar, HeaderA,
  } = props;
  const items = menus.map(data => (
    <NavItem
      title={data.head}
      icon={data.icon}
      items={data.items}
      key={data.id}
      selectedCollapse={selectedCollapse}
      selectedSidebar={selectedSidebar}
      onSelectCollapse={onSelectCollapse}
      onSelectSidebar={onSelectSidebar}
      isToggleSidebar={HeaderA.isToggleSidebar}
    />
  ));
  const isOpen = selectedCollapse === 'home';

  return (
    <React.Fragment>
      <div>
        <NavRow>
          <NavBody xs="12">
            <rs.Row>
              <SideItemCol toggled={HeaderA.isToggleSidebar} xs={12}>
                <CollapseButton
                  button
                  className={isOpen ? 'active' : ''}
                  name="home"
                  onClick={onSelectCollapse}
                >
                  <LeftIconSpan
                    name="home"
                    toggled={HeaderA.isToggleSidebar}
                  >
                    <LeftIcon icon={fa.faHome} name="home" />
                  </LeftIconSpan>
                  <TextSpan toggled={HeaderA.isToggleSidebar} name="home">홈</TextSpan>
                </CollapseButton>
              </SideItemCol>
              {items}
            </rs.Row>
          </NavBody>
        </NavRow>
      </div>
    </React.Fragment>
  );
};
Navbar.propTypes = {
  menus: PropTypes.PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ).isRequired,
  selectedCollapse: PropTypes.string.isRequired,
  selectedSidebar: PropTypes.string.isRequired,
  onSelectCollapse: PropTypes.func.isRequired,
  onSelectSidebar: PropTypes.func.isRequired,
  HeaderA: PropTypes.shape({
    isToggleSidebar: PropTypes.bool.isRequired,
  }).isRequired,
};


export default inject('HeaderA')(observer(Navbar));
