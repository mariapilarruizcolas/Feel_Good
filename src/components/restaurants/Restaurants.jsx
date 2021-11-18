import React from 'react';
import './Restaurants.css';

function Restaurants({ name, image, restaurant }) {
  return (
    <div className="card-container-restaurant">
      <div className="image-container-restaurant">
        <img className="img" src={image} alt=""></img>
        <div className="card-content">
          <div className="card-title">
            <h2>{name}</h2>
            console
            <h5>{restaurant}</h5>
          </div>
        </div>
        <div className="card-body">
          {restaurant &&
            restaurant.map((categorie, i) => {
              return <p key={i}>{categorie.text}</p>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
