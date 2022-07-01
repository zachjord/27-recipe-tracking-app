import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
    };

  const [data, setData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      //if no url provide, use a placeholder photo
      /*if (data.photo === "") {
        data.photo = "./noimg.jpg"
      }*/
      addRecipe(data);
      setData({ ...initialFormState })
    };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="yellow-background">
          <tr>
            <td>
            <input id="name" name="name" size="18" placeholder="Name" value={data.name} onChange={handleChange} />
            </td>
            <td>
            <input id="cuisine" name="cuisine" size="18" placeholder="Cuisine" value={data.cuisine} onChange={handleChange} />
            </td>
            <td>
            <input id="photo" name="photo" size="18" type="url" placeholder="URL" value={data.photo} onChange={handleChange} />
            </td>
            <td>
            <textarea id="ingredients" name="ingredients" size="18" placeholder="Ingredients" value={data.ingredients} onChange={handleChange} />
            </td>
            <td>
            <textarea id="preparation" name="preparation" size="18" placeholder="Preparation" value={data.preparation} onChange={handleChange} />
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
