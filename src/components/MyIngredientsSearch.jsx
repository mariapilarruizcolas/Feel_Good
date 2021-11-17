import React from 'react';

function MyIngredientsSearch({ title, image, cuisineType, recipe }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>Origine de la recette : {cuisineType}</p>
      <p> {recipe}</p>
      <img className="image" src={image} alt=""></img>
    </div>
  );
}

export default MyIngredientsSearch;
