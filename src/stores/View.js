import { observable, action } from 'mobx';

class View {
  @observable isShowModal = false;

  @action hideModal = () => {
    this.isShowModal = false;
  }

  @action showModal = () => {
    this.isShowModal = true;
  }
}

export default new View();
