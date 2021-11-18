import React from 'react';
import { useState, useEffect } from 'react';
import Recipes from './Recipes';
import ShowRestaurants from './restaurants/ShowRestaurants';
import { useParams } from 'react-router';
import './FeelGoodRecipes.css';

function FeelGoodRecipes() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    setToggleState(Number(id));
  }, [id]);
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(5)}>
          Recipes
        </button>
        <button className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(6)}>
          Restaurants
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 5 ? 'content  active-content' : 'content'}>
          <div className="Recipes">
            <Recipes />
          </div>
        </div>

        <div className={toggleState === 6 ? 'content  active-content' : 'content'}>
          <div className="Restaurants">
            <ShowRestaurants />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelGoodRecipes;
