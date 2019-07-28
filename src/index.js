import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import stores from './stores';

ReactDOM.render((
  <Provider {...stores}>
    <BrowserRouter>
      <Route path="/" render={({ history }) => <App history={history} />} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
