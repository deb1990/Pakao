import React from 'react';
import {render} from 'react-dom';
import Header from "./Header";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component {
    render() {
        return <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={Nav}/>
    </Route>
  </Router>
), document.getElementById('app'))


// render(<App/>, document.getElementById('app'));