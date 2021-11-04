import React from 'react';
import './Fridge.css';
function Fridge() {
  return (
    <div>
      <h1>Restes du frigo </h1>
      <form>
        <input type="text" placeholder="Ingredients 1"></input>

        <input type="text" placeholder="Ingredients 2"></input>

        <input type="text" placeholder="Ingredients 3"></input>

        <button>Surprenez-moi</button>
      </form>
    </div>
  );
}
export default Fridge;
