import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as mu from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';
import * as rs from 'reactstrap';
import NavItemInner from './NavItemInner';

const Collapse = styled(rs.Collapse)`
    margin: 0;
`;

const TextSpan = styled.span`
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === true ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0.05s' : '0')}
    }
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
    
    
`;

const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === true ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0.1s' : '0')}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
`;

const ListGroup = styled(rs.ListGroup)`
    text-align: left !important;
    background-color: #192532;
    
    @media only screen and (max-width: 1200px){
        max-height: ${({ toggled }) => (toggled === false ? 0 : 'none')}
        visibility: ${({ toggled }) => (toggled === false ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === false ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === false ? 'visibility opacity max-height 0.1s' : 'visibility opacity max-height 0.3s')}
        transition-delay: ${({ toggled }) => (toggled === false ? '0' : '0.1s')}
    }
    
    @media only screen and (min-width: 1200px) {
        max-height: ${({ toggled }) => (toggled === true ? 0 : 'none')}
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'visibility opacity max-height 0.1s' : 'visibility opacity max-height 0.3s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
`;

const CollapseButton = styled(mu.ListItem)`
    width: 100% !important;
    height: 47px !important;
    padding: 11px 15px !important;
    padding-bottom : 10px !important;
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
    display : inline-block !important;
    
    &.active {
        background-color: #e22a6f !important;
        color: white !important;
    }
    
    &:focus {
        box-shadow : 0;
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

const LeftIconSpan = styled.span`
    display: inline-block;
    height: 20px;
    width: ${({ toggled }) => (toggled === true ? '35px' : '24px')};
    line-height: 25px;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    left: 0;
    font-size: 18px;
    padding-right: ${({ toggled }) => (toggled === true ? '2px' : '0')};
    margin-right: 14px;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    vertical-align : sub;
`;


const RightIcon = styled(FontAwesomeIcon)`
    transition: all 1s;
    transition: all 0.3s;
    line-height: 25px;
    height : 20px;
    margin-top: 3px;

    ${CollapseButton}.active & {
        transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    }
`;

const SideItemCol = styled(rs.Col)`
    color: white;
    text-align: center;
    text-vertical: middle;
    padding: 0;
    
    @media only screen and (max-width: 1200px){
        opacity: ${({ toggled }) => (toggled === true ? 100 : 0)}
        transition: opacity 0.2s;
        transition-delay: 0.08s;
    }
    
    @media only screen and (min-width: 1200px) {
        transition: opacity 0.2s;
        transition-delay: 0.08s;
        opacity: 100;
    }
`;


const NavItem = (props) => {
  const {
    title, NavbarStore, items, icon,
  } = props;
  const { selectedCollapse } = NavbarStore;

  const isOpen = selectedCollapse === title;
  const item = items.map(data => (
    <NavItemInner
      name={data.name}
      to={data.to}
      key={data.id}
      icon={icon}
    />
  ));

  const CollapseButtonRtn = (
    <CollapseButton
      button
      name={title}
      onClick={NavbarStore.onSelectCollapse}
      disabled={false}
      className={isOpen ? 'active' : ''}
    >
      <LeftIconSpan
        name={title}
        toggled={NavbarStore.isToggleSidebar}
      >
        <LeftIcon icon={icon} name={title} />
      </LeftIconSpan>
      <TextSpan toggled={NavbarStore.isToggleSidebar} name={title}>{title}</TextSpan>
      <RightIconSpan toggled={NavbarStore.isToggleSidebar} name={title}>
        <RightIcon icon={fa.faChevronRight} name={title} />
      </RightIconSpan>
    </CollapseButton>
  );

  return (
    <React.Fragment>
      <SideItemCol toggled={NavbarStore.isToggleSidebar.toString()} xs={12}>
        {CollapseButtonRtn}
        <Collapse isOpen={isOpen} toggled={NavbarStore.isToggleSidebar.toString()}>
          <ListGroup toggled={NavbarStore.isToggleSidebar.toString()}>
            {item}
          </ListGroup>
        </Collapse>
      </SideItemCol>
    </React.Fragment>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ).isRequired,
  icon: PropTypes.shape({
  }).isRequired,
  NavbarStore: PropTypes.shape({
    isToggleSidebar: PropTypes.bool.isRequired,
    onSelectCollapse: PropTypes.func.isRequired,
    selectedCollapse: PropTypes.string.isRequired,
  }),
};

NavItem.defaultProps = {
  NavbarStore: null,
};

export default inject('NavbarStore')(observer(NavItem));
