import React from 'react';

import './RecipesSearch.css';

function RecipesSearch({ label, image, handleModal }) {
  return (
    <div className="card-container-recipe">
      <div className="image-container-recipe">
        <img className="img" src={image} alt=""></img>
        <div className="card-content">
          <div className="card-title">
            <h2>{label}</h2>
          </div>
        </div>
        <div className="card-body">
          <button className="button-recipes" onClick={(e) => handleModal(e, label)}>
            Recette
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipesSearch;
