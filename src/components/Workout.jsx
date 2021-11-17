import React, { useState, useEffect } from 'react';
import './Workout.css';
import Modal from 'react-modal';
import axios from 'axios';
Modal.setAppElement('#root');

function Workout({ title, imageSrc }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [muscles, setMuscles] = useState([]);
  const [chosenMuscles, setChosenMuscles] = useState([]);

  const config = {
    method: 'get',
    url: 'https://wger.de/api/v2/exerciseinfo/?limit=4000',
    headers: {
      Authorization: 'Token 52415d60d3d7edc75c40674a65b0281a2fd21240',
    },
  };
  useEffect(() => {
    const fetchMuscle = async () => {
      const res = await axios(config);
      setMuscles(res.data.results);
    };
    fetchMuscle();
  }, []);

  useEffect(() => {
    const filterMuscles = () => {
      const filteredMuscle = muscles.filter((muscle) => muscle.language.id === 2 && muscle.images.length > 0 && muscle.category.name === `${title}`);
      setChosenMuscles(filteredMuscle);
    };
    filterMuscles();
  }, [title, muscles]);

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="btn">
          <button onClick={() => setmodalIsOpen(true)}>Voir plus</button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setmodalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: 'grey',
              },
              content: {
                color: '#464e47',
              },
            }}
          >
            <section>
              <ul className="list-exercises">
                {chosenMuscles.map((musc, index) => (
                  <div key={index}>
                    <li>{musc.name}</li>
                    <div className="descExo">
                      <p className="descriptionExercise">{musc.description.replace(/<[^>]+>/gm, '')}</p>
                      <img className="imgExo" key={musc.id} src={musc.images[0].image} alt={'img1'} />
                      <img className="imgExo" key={index} src={musc.images[1].image} alt={'img2'} />
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            <div>
              <button className="closeModal" onClick={() => setmodalIsOpen(false)}>
                X
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Workout;
