import React from 'react';
import { useState } from 'react';
import './BienManger.css';
import Recipes from './Recipes';
import ShowRecipes from './ShowRecipes.jsx';
import Frigo from './Frigo';
import ShowRecipesFrigo from './ShowRecipesFrigo';

function BienManger() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Recettes
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Frigo
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <div className="FormRecettes">
            <Recipes />
          </div>
          <div>
            <ShowRecipes />
          </div>
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <div className="FormFrigo">
            <Frigo />
          </div>
          <div>
            <ShowRecipesFrigo />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BienManger;
