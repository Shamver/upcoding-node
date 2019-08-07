import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import history from './history';
import * as serviceWorker from './serviceWorker';
import stores from './stores';
import App from './components/App';

ReactDOM.render((
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
