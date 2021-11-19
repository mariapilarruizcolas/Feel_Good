import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Recipes from './Recipes';
import ShowRestaurants from './restaurants/ShowRestaurants';

function FeelGoodRecipes() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState('workout');

  useEffect(() => {
    setToggleState(id);
  }, [id]);
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 'recipes' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('recipes')}>
          Recettes
        </button>
        <button className={toggleState === 'restaurants' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('restaurants')}>
          Restaurants
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 'recipes' ? 'content  active-content' : 'content'}>
          <div className="Recipes">
            <Recipes />
          </div>
        </div>

        <div className={toggleState === 'restaurants' ? 'content  active-content' : 'content'}>
          <div className="Restaurants">
            <ShowRestaurants />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelGoodRecipes;
