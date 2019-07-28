import { observable, action } from 'mobx';

class HeaderA {
  @observable dropDownToggle = {
    Message: false,
    Notification: false,
    Profile: false,
  };

  @observable isToggleSidebar = false;

  @action onToggleDropDown = (comp) => {
    const { dropDownToggle } = this.state;

    const keys = Object.keys(dropDownToggle);
    let key = '';
    // let item = '';
    for (let i = 0; i < keys.length; i += 1) {
      key = keys[i];
      // item = dropDownToggle[key];
      if (key === comp) {
        dropDownToggle[key] = !dropDownToggle[key];
      } else {
        dropDownToggle[key] = false;
      }
    }

    this.dropDownToggle = dropDownToggle;
  };

  @action onToggleSidebar = () => {
    this.isToggleSidebar = !this.isToggleSidebar;
  };

  @action onToggleDropDownMessage = () => {
    const { props } = this;
    props.onToggleDropDown('Message');
  };

  @action onToggleDropDownNoti = () => {
    const { props } = this;
    props.onToggleDropDown('Notification');
  };

  @action onToggleDropDownProfile = () => {
    const { props } = this;
    props.onToggleDropDown('Profile');
  };

}

export default new HeaderA();
