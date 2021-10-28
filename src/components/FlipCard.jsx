import React from 'react';
import './FlipCard.css';

function FlipCard() {
  return (
    <div className="card-menu">
      <div className="flip-card-container" id="--hue: 220">
        <div className="flip-card ">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="sport1"
              ></img>
              <figcaption>Sport</figcaption>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1593164842249-d74fc06dae05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZpdG5lc3MlMjBlcXVpcG1lbnR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="sport2"
              ></img>
            </figure>
            <button>Book</button>
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpbmd8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="repas1"
              ></img>
              <figcaption>Repas</figcaption>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1619674072044-da7ecf3b17cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRpZXR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="repas2"
              ></img>
            </figure>
            <button>Zen</button>
          </div>
        </div>
      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8emVuJTIweW9nYXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="zen1"
              ></img>
              <figcaption>Brohm Lake</figcaption>
            </figure>
          </div>
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1610344264630-e77bc4bf5983?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8emVuJTIweW9nYXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="zen2"
              ></img>
            </figure>
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
