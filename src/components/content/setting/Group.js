import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import * as Proptypes from 'prop-types';
import { observer, inject } from 'mobx-react';

const Group = () => (
  <ListItem button onClick={MenuStore.onToggleCollapse}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="게시판" />
    {MenuStore.isCollapseOpen ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
);

Group.proptypes = {
  MenuStore: Proptypes.shape({
    onToggleCollapse: Proptypes.func.isRequired,
    isCollapseOpen: Proptypes.bool.isRequired,
  }).isRequired,
};

export default inject('MenuStore')((observer)(Group));
