import { observable, action } from 'mobx';

class NavbarStore {
  @observable selectedCollapse = 'home';

  @observable selectedSidebar = '';

  @observable isToggleSidebar = false;

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
