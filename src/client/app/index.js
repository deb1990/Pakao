import React from 'react';
import {render} from 'react-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

class App extends React.Component {
    constructor(){
        super();
        // loginStore.on("change", function(){
        //     this.setState({todos:demoStore.getAll()});
        // }.bind(this));
    }
    // addTodo(){
    //     dispatcher.dispatch({
    //         type: "CREATE_TODO",
    //         text: "Debarshi"
    //     });
    // }
    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="home" component={Home}/>
        </Route>
    </Router>
), document.getElementById('app'));