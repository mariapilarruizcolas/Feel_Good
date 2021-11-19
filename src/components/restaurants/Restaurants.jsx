import React from 'react';

import './Restaurants.css';

function Restaurants({ name, image, restaurant, location, rating, phone }) {
  return (
    <div className="card-container-restaurant">
      <div className="image-container-restaurant">
        <img className="img" src={image} alt=""></img>
        <div className="card-content">
          <div className="card-title">
            <h3 className="name-restaurant">{name}</h3>
            <div className="location">
              <h4>{location}</h4>
            </div>
            <h4 className="name-restaurant">{phone}</h4>
            <h4>Avis Client : {rating}</h4>
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
