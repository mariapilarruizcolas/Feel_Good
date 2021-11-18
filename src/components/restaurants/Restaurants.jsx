import React from 'react';

function Restaurants({ name, image, location }) {
  return (
    <div className="card-container-restaurant">
      <div className="image-container-restaurant">
        <img className="img" src={image} alt=""></img>
        <div className="card-content">
          <div className="card-title">
            <h2>{name}</h2>
            <h5>{location}</h5>
          </div>
        </div>
        <div className="card-body">nada</div>
      </div>
    </div>
  );
}

export default Restaurants;
