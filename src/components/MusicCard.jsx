import React from 'react';
import './MusicCard.css';
function MusicCard(props) {
  return (
    <div className="card-container-music">
      <div className="image-container-music">
        <img className="image-music" src={props.image} alt={props.title} />
      </div>
      <div className="card-content-music">
        <div className="card-title-music">
          <h2>{props.title}</h2>
        </div>
        <div className="card-body-music">
          <div>
            <a className="likeButton-music" href={props.link} target="_blank" rel="noreferrer">
              {props.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
