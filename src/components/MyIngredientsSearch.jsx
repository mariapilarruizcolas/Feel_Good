import React from 'react';

import './MyIngredientsSearch.css';

function MyIngredientsSearch({ title, image, handleModal }) {
  return (
    <div className="card-container-recipe">
      <div className="image-container-recipe">
        <img className="img" src={image} alt=""></img>
        <div className="card-content">
          <div className="card-title">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="card-body">
          <button className="button" onClick={(e) => handleModal(e, title)}>
            Recette
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyIngredientsSearch;
