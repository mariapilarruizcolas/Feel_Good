import React from 'react';
import Recipes from './Recipes';
import ShowRecipes from './ShowRecipes';
import './FeelGoodRecipes.css';

function FeelGoodRecipes() {
  return (
    <div className="container">
      <div className="content-tabs">
        <button className="tabs active-tabs">Recettes</button>
        <div className="FormRecipes">
          <Recipes />
        </div>
        <div>
          <ShowRecipes />
        </div>
      </div>
    </div>
  );
}
export default FeelGoodRecipes;
