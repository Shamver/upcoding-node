import React from 'react';
import {Collapse, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {StarBorder} from '@material-ui/icons';
import styled from 'styled-components';

const NestListItem = styled(ListItem)`
  padding-left: 32px !important;
`;

const Child = () => (
  <Collapse in={MenuStore.isCollapseOpen} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <NestListItem button>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="자유" />
      </NestListItem>
      <NestListItem button>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="자유" />
      </NestListItem>
    </List>
  </Collapse>
);

export default Child;