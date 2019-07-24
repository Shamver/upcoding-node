import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Mobx의 store를 불러오기 위한 어노테이션(?)
@inject('viewStore')
@observer
class Home extends Component {
  // 가져올 스토어의 형식을 아래와 같이 선언(초기화) 해주어야 함.
  static propTypes = {
    viewStore: PropTypes.shape({
      isShowModal: PropTypes.bool.isRequired,
      showModal: PropTypes.func.isRequired,
      hideModal: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { viewStore } = this.props;
    return (
      <div className="Home">
        <p>Home</p>
        <p>
          {
            viewStore.isShowModal ? <span>aaa</span> : ''
          }
        </p>

        <button type="button" onClick={viewStore.showModal}>쇼</button>
        <button type="button" onClick={viewStore.hideModal}>하이드</button>
      </div>
    );
  }
}


export default Home;
