import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const addRecipe = (data) => {
    setRecipes([...recipes, data]);
  }
  const handleDelete = (event) => {
    const index = event.target.id;
    const newRecipies = [];
    for (let recipe in recipes) {
      if (recipe !== index) {
        newRecipies.push(recipes[recipe]);
      }
    }
    setRecipes(newRecipies);
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
