import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import stores from './stores';

ReactDOM.render((
  <BrowserRouter history={ history }>
    <Route path="/" render={({ history }) => <App history={history} />} />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
