import './RecipeModalTwo.css';
import React from 'react';

function RecipeModalTwo({ recipe, close }) {
  return (
    <div className="show">
      <button onClick={close}>X</button>
      <img className="image" src={recipe.strMealThumb} alt=""></img>
      <div className="ingredients">
        <h1>{recipe.strMeal}</h1>
        <h4>{recipe.strMeal}</h4>
        <h5>{recipe.strMeal}</h5>
        {recipe.strIngredient &&
          recipe.strIngredient.map((ingredient, i) => {
            return <p key={i}>{ingredient.text}</p>;
          })}
      </div>
    </div>
  );
}

export default RecipeModalTwo;
