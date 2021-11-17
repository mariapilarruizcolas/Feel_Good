import './RecipeModal.css';
import React from 'react';

function RecipeModal({ recipe, close }) {
  return (
    <div className="show">
      <button onClick={close}>X</button>
      <img className="image" src={recipe.recipe.image} alt=""></img>
      <div className="ingredients">
        <h1>{recipe.recipe.label}</h1>
        <h4>{recipe.recipe.calories}</h4>
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
