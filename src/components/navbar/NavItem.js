import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import * as mu from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavItemInner from './NavItemInner';
import TextSpan from '../../style/navbar/TextSpan';
import SideItemCol from '../../style/navbar/SideItemCol';
import Collapse from '../../style/navbar/Collapse';
import ListGroup from '../../style/navbar/ListGroup';
import RightIconSpan from '../../style/navbar/RightIconSpan';

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

const NavItem = (props) => {
  const {
    title, items, icon, selectedCollapse,
    selectedSidebar, isToggleSidebar, onSelectSidebar, onSelectCollapse,
  } = props;

  const isOpen = selectedCollapse === title;
  const item = items.map(data => (
    <NavItemInner
      name={data.name}
      to={data.to}
      key={data.id}
      onSelectSidebar={onSelectSidebar}
      selectedSidebar={selectedSidebar}
      isToggleSidebar={isToggleSidebar}
    />
  ));

  const CollapseButtonRtn = (
    <CollapseButton
      button
      name={title}
      onClick={onSelectCollapse}
      disabled={false}
      className={isOpen ? 'active' : ''}
    >
      <LeftIconSpan
        name={title}
        toggled={isToggleSidebar}
      >
        <LeftIcon icon={icon} name={title} />
      </LeftIconSpan>
      <TextSpan toggled={isToggleSidebar} name={title}>{title}</TextSpan>
      <RightIconSpan toggled={isToggleSidebar} name={title}>
        <RightIcon icon={fa.faChevronRight} name={title} />
      </RightIconSpan>
    </CollapseButton>
  );

  return (
    <React.Fragment>
      <SideItemCol toggled={isToggleSidebar} xs={12}>
        {CollapseButtonRtn}
        <Collapse isOpen={isOpen} toggled={isToggleSidebar}>
          <ListGroup toggled={isToggleSidebar}>
            {item}
          </ListGroup>
        </Collapse>
      </SideItemCol>
    </React.Fragment>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object]),
  ).isRequired,
  icon: PropTypes.shape({
  }).isRequired,
  selectedCollapse: PropTypes.string.isRequired,
  selectedSidebar: PropTypes.string.isRequired,
  isToggleSidebar: PropTypes.bool.isRequired,
  onSelectSidebar: PropTypes.func.isRequired,
  onSelectCollapse: PropTypes.func.isRequired,
};

export default NavItem;
