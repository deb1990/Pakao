import React from 'react';
import {render} from 'react-dom';
import Header from "./Header";
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import * as actions from "./actions/actions";
import demoStore from "./stores/demoStore";
import dispatcher from "./Dispatcher";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: demoStore.getAll()
        };
        demoStore.on("change", function(){
            this.setState({todos:demoStore.getAll()});
        }.bind(this));
    }
    addTodo(){
        dispatcher.dispatch({
            type: "CREATE_TODO",
            text: "Debarshi"
        });
    }
    render() {
        return <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/head">Header</Link></li>
            {this.state.todos.map(function(itm){ return <div>{itm.text}</div>})}
            <button onClick={this.addTodo.bind(this)}>Add</button>
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