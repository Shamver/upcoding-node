import React, { Component } from 'react';
import axios from 'axios';
import {
  Switch, Route, withRouter, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const About = React.lazy(() => import('./About'));
const Home = React.lazy(() => import('./Home'));

// react-router-dom에서 라우팅을 하기 위한 어노테이션(?)
@withRouter
class App extends Component {
  // localhost의 node 백단, /api 테스트를 위함
  handleClick = () => {
    axios.get('/api/')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Switch>
            <React.Suspense fallback={(<div>Loading...</div>)}>
              <Route exact path="/about" component={About} />
              <Route path="/home" component={Home} />
            </React.Suspense>
          </Switch>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <button type="button" onClick={this.handleClick}>Axios to api self</button>
        </header>
      </div>
    );
  }
}

export default App;
