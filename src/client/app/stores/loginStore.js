import { EventEmitter } from "events";

import dispatcher from "../Dispatcher";

class loginStore extends EventEmitter {
    constructor() {
        super();
        this.loggedInUser = {};
    }

    userLoggedIN(user) {
        this.loggedInUser = user;
        this.emit("change");
    }

    getLoggedInUser(){
        return this.loggedInUser;
    }

    handleActions(action) {
        switch(action.type) {
            case "LOGGED_IN": {
                this.userLoggedIN(action.obj);
                break;
            }
        }
    }
}

const store = new loginStore;
dispatcher.register(store.handleActions.bind(store));

export default store;