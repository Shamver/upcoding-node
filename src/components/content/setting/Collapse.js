import React from 'react';
import {
  ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse, Fab,
} from '@material-ui/core';
import {
  ExpandLess, ExpandMore, StarBorder,
} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import * as Proptypes from 'prop-types';
import MenuDialog from './Dialog';

const ListRoot = styled(List)`
  width : '100%';
  background-color : white;
`;



const FabRight = styled(Fab)`
  float : right;
  width : 26px !important;
  min-height : 0px !important;
  height: 26px !important; 
  margin-top: 10px !important;
`;

const Collapse = ({ MenuStore }) => (
  <React.Fragment>
    <ListRoot
      component="nav"
      subheader={(
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        >
          메뉴 목록
          <FabRight color="primary" aria-label="add" onClick={MenuStore.onOpenDialog}>
            <AddIcon />
          </FabRight>
        </ListSubheader>
      )}
    >


    </ListRoot>
    <MenuDialog />
  </React.Fragment>
);

Collapse.propTypes = {
  MenuStore: Proptypes.shape({
    isCollapseOpen: Proptypes.bool.isRequired,
    isDialogOpen: Proptypes.bool.isRequired,
    onCloseDialog: Proptypes.func.isRequired,
    onToggleCollapse: Proptypes.func.isRequired,
    onOpenDialog: Proptypes.func.isRequired,
  }),
};

Collapse.defaultProps = {
  MenuStore: null,
};

export default inject('MenuStore')((observer)(Collapse));
