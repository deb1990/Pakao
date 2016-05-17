import React from 'react';
import {render} from 'react-dom';
import Header from "./Header";
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

class App extends React.Component {
    render() {
        return <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/head">Header</Link></li>
        </ul>
        {this.props.children}
      </div>;
    }
}


class Nav extends React.Component {
    render() {
        return <div>nav</div>;
    }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Header}/>
      <Route path="about" component={Nav}/>
      <Route path="head" component={Header}/>
    </Route>
  </Router>
), document.getElementById('app'));