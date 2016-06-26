/**
 * Created by deb19 on 07-05-2016.
 */
import React from 'react';
import recipeStore from '../../stores/RecipeStore';

export default class RecipeList extends React.Component {
    constructor(){
        super();
        this.state = {
            allRecipes: this.getRecipes()
        };
    }
    getRecipes(){
        return recipeStore.getAllRecipes();
    }
    render () {
        var elms = this.state.allRecipes.map(function (recipe) {
            return <div>{recipe.title}</div>
        });
        return <div>{elms}</div>;
    }
}