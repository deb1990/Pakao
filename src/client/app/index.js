import React from 'react';
import {render} from 'react-dom';
import Header from "./Header";

class App extends React.Component {
    render() {
        return <div><Header></Header><p> Hello React!</p></div>;
    }
}

render(<App/>, document.getElementById('app'));