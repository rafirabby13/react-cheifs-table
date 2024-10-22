/* eslint-disable react/prop-types */
// import Reat from 'react';

import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe.jsx";

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setRecipes(data)
        })
    },[])
    return (
        <div className="col-span-2">
           <div className="grid md:grid-cols-2 gap-8">
           {
                recipes.map((recipe)=> <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                addRecipeToQueue={addRecipeToQueue}
                ></Recipe>)
            }
           </div>
        </div>
    );
};

export default Recipes;