import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

const ListItemA = styled(ListItem)`
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
    ${ListItemA}.active & {
        color: white !important;
        background: none !important;
    }
    &:hover {
        color: white !important;
        text-decoration: none !important;
    }
`;

const NavItemInner = (props) => {
  const { name, to, NavbarStore } = props;
  const { selectedSidebar } = NavbarStore;
  const isOpen = selectedSidebar === name;
  return (
    <React.Fragment>
      <ListItemA
        button
        toggled={NavbarStore.isToggleSidebar.toString()}
        tag="button"
        className={isOpen ? 'active' : ''}
      >
        <ListLink to={to} name={name} onClick={NavbarStore.onSelectSidebar}>{name}</ListLink>
      </ListItemA>
    </React.Fragment>
  );
};

NavItemInner.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  NavbarStore: PropTypes.shape({
    onSelectSidebar: PropTypes.func.isRequired,
    isToggleSidebar: PropTypes.bool.isRequired,
    selectedSidebar: PropTypes.string.isRequired,
  }),
};

NavItemInner.defaultProps = {
  NavbarStore: null,
};

export default inject('NavbarStore')((observer)(NavItemInner));
