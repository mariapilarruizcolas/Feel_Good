import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Workout from './Workout';
import Yoga from './Yoga';
import Pilates from './Pilates';

import './Sport.css';

function Sport() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState();

  useEffect(() => {
    setToggleState(id);
  }, [id]);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 'workout' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('workout')}>
          Se Dépenser
        </button>
        <button className={toggleState === 'relax' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('relax')}>
          Se Relaxer
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 'workout' ? 'content  active-content' : 'content'}>
          <Workout title="Arms" imageSrc="../../img/arms.jpeg" />
          <Workout title="Chest" imageSrc="../../img/chest.jpeg" />
          <Workout title="Abs" imageSrc="../../img/abs.jpeg" />
          <Workout title="Shoulders" imageSrc="../../img/shoulders.jpeg" />
          <Workout title="Legs" imageSrc="../../img/quadri.jpeg" />
          <Workout title="Back" imageSrc="../../img/back.jpeg" />
        </div>

        <div className={toggleState === 'relax' ? 'content active-content' : 'content'}>
          <Yoga
            className="compo-yoga"
            title="Yoga"
            imageUrl="../img/yoga.jpeg"
            body="Prenez le temps d'apprendre à connaître votre cotre corps et votre esprit."
          />

          <Pilates
            className="compo-pilates"
            title="Pilates"
            imageUrl="../img/pilates.jpeg"
            body="Renforcer vos muscles profonds et améliorer votre équilibre avec nos exercices."
          />
        </div>
      </div>
    </div>
  );
}
export default Sport;
