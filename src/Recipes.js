import React, { useState } from 'react';

function Recipes({ type, content }) {
  const [active, setActive] = useState(true);
  const handleDelete = () => {
    setActive(false);
  };

  if (active) {
    return (
      <div className="post">
        {type === 'Text' ? <p>{content}</p> : <img src={content} alt="meh" />}
        <button type="submit" name="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  } else {
    return null
  }

}

export default Recipes;
