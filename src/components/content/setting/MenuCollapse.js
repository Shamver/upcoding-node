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
import MenuDialog from './MenuDialog';

const ListRoot = styled(List)`
  width : '100%';
  background-color : white;
`;

const NestListItem = styled(ListItem)`
  padding-left: 32px !important;
`;

const FabRight = styled(Fab)`
  float : right;
  width : 26px !important;
  min-height : 0px !important;
  height: 26px !important; 
  margin-top: 10px !important;
`;

const MenuCollapse = ({ MenuStore }) => (
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
      <ListItem button onClick={MenuStore.onToggleCollapse}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="게시판" />
        {MenuStore.isCollapseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={MenuStore.isCollapseOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="자유" />
          </NestListItem>
        </List>
      </Collapse>
    </ListRoot>
    <MenuDialog open={MenuStore.isDialogOpen} onClose={MenuStore.onCloseDialog} />
  </React.Fragment>
);

export default inject('MenuStore')((observer)(MenuCollapse));
