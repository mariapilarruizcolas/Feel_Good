import React from 'react';
import './Recipes.css';
function Recipes() {
  return (
    <div>
      <h1>Recettes</h1>
      <form>
        <input type="text" placeholder="Origin de la recette"></input>

        <input type="text" placeholder="Matin-midi-soir"></input>

        <input type="text" placeholder="Viande, poisson, vegetarien"></input>

        <button>Surprenez-moi</button>
      </form>
    </div>
  );
}
export default Recipes;
