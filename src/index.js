import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import { history } from 'react-router-dom/Router';
import * as serviceWorker from './serviceWorker';
import stores from './stores';
import App from './components/App';

console.log(history);

ReactDOM.render((
  <Provider {...stores}>
    <BrowserRouter>
      <Route path="/" render={() => <App />} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
