/**
 * Created by deb19 on 07-05-2016.
 */
import React from 'react';
import loginStore from '../stores/loginStore';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {
    constructor(){
        super();
        this.loggedInUser = loginStore.getLoggedInUser();

    }

    componentWillMount(){
        this.checkUser();
    }

    checkUser(){
        if(!this.loggedInUser.name){
            hashHistory.push("/")
        }else{
            console.log("");
        }
    }

    render () {
        return <div>
            LoggedIN
        </div>;
    }
}