import React from 'react';

import './RecipeModal.css';

function RecipeModal({ recipe, close }) {
  return (
    <div className="show">
      <button className="btn-bouton" onClick={close}>
        X
      </button>
      <img className="image" src={recipe.recipe.image} alt="" />
      <div className="ingredients">
        <h2>{recipe.recipe.label}</h2>
        <h4>{Math.round(recipe.recipe.calories)} Kcal</h4>
        <h5>{recipe.recipe.cuisineType}</h5>
        {recipe.recipe.ingredients &&
          recipe.recipe.ingredients.map((ingredient, i) => {
            return <p key={i}>{ingredient.text}</p>;
          })}
      </div>
    </div>
  );
}

export default RecipeModal;
