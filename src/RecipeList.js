import React from "react";
import Recipe from "./Recipe"
import "./RecipeList.css";

function RecipeList({ recipes, handleDelete }) {

return (
  <div className="recipe-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>

  {recipes.map((recipe, index) => {
    return (
        <Recipe name={recipe.name}
                 cuisine={recipe.cuisine}
                 photo={recipe.photo}
                 ingredients={recipe.ingredients}
                 preparation={recipe.preparation}
                 index={index}
                 handleDelete={handleDelete}
                 />
    );
  })}
  </table>
</div>
);

}

export default RecipeList;
