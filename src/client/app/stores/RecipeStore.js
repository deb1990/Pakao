import { EventEmitter } from "events";

import dispatcher from "../Dispatcher";
class Recipe{
    constructor(title, recipe, pics, vids, cuisine, cookingTime, comments){
        this.pid = 1;
        this.dateTime = new Date();
        this.title = title;
        this.recipe = recipe;
        this.pics = pics;
        this.vids = vids;
        this.cuisine = cuisine;
        this.cookingTime = cookingTime;
        this.comments = comments;
    }
}
class RecipeStore extends EventEmitter {
    constructor() {
        super();
        this.allRecipes = [];
        this.allRecipes.push(new Recipe("Biriyani"));
        this.allRecipes.push(new Recipe("IceCream"));
    }

    getAllRecipes(){
        return this.allRecipes;
    }

    handleActions(action) {

    }
}

const store = new RecipeStore;
dispatcher.register(store.handleActions.bind(store));

export default store;

