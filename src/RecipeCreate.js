import React, { useState } from "react";

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const handleSubmit = (event) => {
      event.preventDefault();
      //addPosts(data);
      //setData({ ...initialFormState })
    };


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <input id="name" name="name" size="18" placeholder="Name" />
            </td>
            <td>
            <input id="cuisine" name="cuisine" size="18" placeholder="Cuisine" />
            </td>
            <td>
            <input id="photo" name="photo" size="18" type="url" placeholder="URL" />
            </td>
            <td>
            <textarea id="ingredients" name="ingredients" size="18" placeholder="Ingredients" />
            </td>
            <td>
            <textarea id="preparation" name="preparation" size="18" placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
