import React from 'react';
import './MusicCard.css';

function MusicCard(props) {
  return (
    <div className="card-container-music">
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-body">
          <a className="likeButton" href={props.link} target="_blank" rel="noreferrer">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
//onClick='window.open({props.link},'_blank')'
