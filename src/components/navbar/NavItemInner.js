import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as mu from '@material-ui/core';
import PropTypes from 'prop-types';

const ListItem = styled(mu.ListItem)`
    padding : 0px 0px !important;
    height : 42px;
`;

const ListLink = styled(Link)`
    color: #99abb4 !important;
    font-size: 16px;
    text-decoration: none !important;
    outline: none;
    box-shadow: none;
    display: block !important;
    padding-left : 65px; 
    height: 100% !important;
    transition: all 0.3s;
    line-height : 42px;
    width : 100%;
    ${ListItem}.active & {
        color: white !important;
        background: none !important;
    }
    &:hover {
        color: white !important;
        text-decoration: none !important;
    }
`;


const NavItemInner = (props) => {
  const {
    name, to, selectedSidebar, onSelectSidebar, isToggleSidebar,
  } = props;
  const realTo = to;
  const isOpen = selectedSidebar === name;
  return (
    <React.Fragment>
      <ListItem
        button
        toggled={isToggleSidebar}
        tag="button"
        className={isOpen ? 'active' : ''}
      >
        <ListLink to={realTo} name={name} onClick={onSelectSidebar}>{name}</ListLink>
      </ListItem>
    </React.Fragment>
  );
};

NavItemInner.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  selectedSidebar: PropTypes.string.isRequired,
  onSelectSidebar: PropTypes.func.isRequired,
  isToggleSidebar: PropTypes.bool.isRequired,
};

export default NavItemInner;
