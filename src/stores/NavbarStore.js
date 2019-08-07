import { observable, action } from 'mobx';
import axios from 'axios';

import history from '../history';

class NavbarStore {
  @observable selectedCollapse = 'home';

  @observable selectedSidebar = '';

  @observable isToggleSidebar = false;

  @observable menus = {};

  @action getSideMenuList = () => {
    axios.post('/api/menu', {}).then((res) => {
      console.log(res.data);
      const menuArray = res.data;
      const menu = [];

      for (let i = 0; i < menuArray.length; i += 1) {
        if (menuArray[i].MENU_LEVEL === '1') {
          menu.push({
            id: menuArray[i].MENU_ID,
            name: menuArray[i].MENU_NAME,
            icon: ['', ''],

          });
        }
      }
    });
  };

  @action onSelectCollapse = (event) => {
    let name = event.target.getAttribute('name');
    if (!name) {
      name = event.target.parentElement.getAttribute('name');
    }

    if (name === 'home') {
      history.push('/');
    }

    if (this.selectedCollapse === name) this.selectedCollapse = '';
    else this.selectedCollapse = name;
  };

  @action onSelectSidebar = (data) => {
    this.selectedSidebar = data.target.name;
  };

  @action onToggleSidebar = () => {
    this.isToggleSidebar = !this.isToggleSidebar;
  };
}

export default new NavbarStore();
