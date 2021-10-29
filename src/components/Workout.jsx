import React from 'react';
import './workout.css';

function Workout({ title, imageSrc, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p className="workout-desc">{body}</p>
        </div>

        <div className="btn">
          <button>view more</button>
        </div>
      </div>
    </div>
  );
}
export default Workout;
