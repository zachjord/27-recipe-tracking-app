import React from 'react';

function Recipe({ name, cuisine, photo, ingredients, preparation, index, handleDelete }) {

  return (
    <tbody key={index}>
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo} alt={name} /></td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td><button name="delete" id={index} onClick={handleDelete}>Delete</button></td>
      </tr>
    </tbody>
  );
}
export default Recipe;
