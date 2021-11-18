import React, { useState } from 'react';
import Modal from 'react-modal';

import './Pilates.css';

function Pilates({ title, imageUrl, body }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>

      <div className="btn">
        <button onClick={() => setmodalIsOpen(true)}>Voir plus</button>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
          <div>
            <img src="./../img/pilates1.jpeg" alt="" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Pilates;
