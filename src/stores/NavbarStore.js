import { observable, action } from 'mobx';
import axios from 'axios';

class NavbarStore {
  @observable selectedCollapse = 'home';

  @observable selectedSidebar = '';

  @observable isToggleSidebar = false;

  @observable menus = [];

  @action getSideMenuList = () => {
    axios.post('/api/menu', {}).then((res) => {
      const menuArray = res.data;
      const menus = [];
      const ParentMenus = [];
      const childMenus = [];

      menuArray.sort((a, b) => {
        if (a.MENU_LEVEL === b.MENU_LEVEL) return a.MENU_ORDER - b.MENU_ORDER;

        return a.MENU_LEVEL - b.MENU_LEVEL;
      });

      for (let i = 0; i < menuArray.length; i += 1) {
        if (menuArray[i].MENU_LEVEL === 1) ParentMenus.push(menuArray[i]);
        else childMenus.push(menuArray[i]);
      }

      let menuObject = {};
      let childMenuObject = {};
      for (let i = 0; i < ParentMenus.length; i += 1) {
        menuObject = {
          id: ParentMenus[i].MENU_ID,
          name: ParentMenus[i].MENU_NM,
          icon: [ParentMenus[i].MENU_ICON.split('_')[0], ParentMenus[i].MENU_ICON.split('_')[1]],
          childMenus: [],
        };

        for (let j = 0; j < childMenus.length; j += 1) {
          if (childMenus[j].MENU_UPPER === menuObject.id) {
            childMenuObject = {
              id: childMenus[j].MENU_ID,
              name: childMenus[j].MENU_NM,
              url: ParentMenus[i].MENU_URL + childMenus[j].MENU_URL,
              icon: [childMenus[i].MENU_ICON.split('_')[0], childMenus[i].MENU_ICON.split('_')[1]],
            };
            menuObject.childMenus.push(childMenuObject);
          }
        }
        menus.push(menuObject);
      }

      this.menus = menus;
    });
  };

  @action onSelectCollapse = (event) => {
    let name = event.target.getAttribute('name');
    if (!name) {
      name = event.target.parentElement.getAttribute('name');
    }

    if (name === 'home') {
      // const { history } = this.props;
      // history.push('/');
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
