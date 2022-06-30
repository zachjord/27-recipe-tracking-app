import React from "react";

function RecipeList({ recipes }) {

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.

return (
  <div className="recipe-list" onSubmit={handleDelete}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>URL</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>

  {recipes.map((recipe, index) => {
    return (
    <tbody key={index}>
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt="placeholder" /></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button name="delete">Delete</button></td>
      </tr>
    </tbody>
    );
  })}

  </table>
</div>
);

}

export default RecipeList;
