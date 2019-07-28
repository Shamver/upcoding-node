import { observable, action } from 'mobx';

class HeaderStore {
  @observable dropDownToggle = {
    isMessageToggle: false,
    isNotificationToggle: false,
    isProfileToggle: false,
  };

  @observable isToggleSidebar = false;

  @action onToggleDropDown = (comp) => {
    const { dropDownToggle } = this;

    const keys = Object.keys(dropDownToggle);
    let key = '';
    for (let i = 0; i < keys.length; i += 1) {
      key = keys[i];
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
    this.onToggleDropDown('isMessageToggle');
  };

  @action onToggleDropDownNoti = () => {
    this.onToggleDropDown('isNotificationToggle');
  };

  @action onToggleDropDownProfile = () => {
    this.onToggleDropDown('isProfileToggle');
  };
}

export default new HeaderStore();
