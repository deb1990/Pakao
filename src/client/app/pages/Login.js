/**
 * Created by deb19 on 07-05-2016.
 */
import React from 'react';
import { hashHistory } from 'react-router';
import loginStore from '../stores/loginStore';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    fbLogin(){
        var self = this;
        FB.login(function(response) {
            if (response.authResponse) {
                FB.api('/me', { locale: 'en_US', fields: 'name, email' }, function(response) {
                    console.log(response);
                    self.setState({
                        facebookId: response.id
                    });
                    loginStore.userLoggedIN(response);
                    hashHistory.push("/home");
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'email'});
    }
    render () {
        return <div>
            <button onClick={this.fbLogin.bind(this)}>FB Login</button>
            <img src={"https://graph.facebook.com/"+this.state.facebookId+"/picture?type=large"}/>
        </div>;
    }
}