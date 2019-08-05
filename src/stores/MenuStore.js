import React from 'react';
import { observable, action } from 'mobx';

class MenuStore extends React.Component {
  @observable isDialogOpen = false;

  @observable isCollapseOpen = false;

  @action onOpenDialog = () => {
    this.isDialogOpen = true;
  };

  @action onCloseDialog = () => {
    this.isDialogOpen = false;
  };

  @action onToggleCollapse = () => {
    this.isCollapseOpen = !this.isCollapseOpen;
  };
}

export default new MenuStore();
