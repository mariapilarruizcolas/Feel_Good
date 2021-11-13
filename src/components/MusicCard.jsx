import React from 'react';
import './MusicCard.css';

function MusicCard(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <a className="likeButton" href={props.link}>
            {props.name}
          </a>
        </div>

        <div className="btn">
          <button>Ecouter</button>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
