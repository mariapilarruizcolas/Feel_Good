import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Workout from './Workout';
import Yoga from './Yoga';
import Pilates from './Pilates';

import './Sport.css';

function Sport() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState();

  useEffect(() => {
    setToggleState(Number(id));
  }, [id]);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(1)}>
          Se Dépenser
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(2)}>
          Se Relaxer
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <Workout title="Arms" imageSrc="../../img/arms.jpeg" />
          <Workout title="Chest" imageSrc="../../img/chest.jpeg" />
          <Workout title="Abs" imageSrc="../../img/abs.jpeg" />
          <Workout title="Shoulders" imageSrc="../../img/shoulders.jpeg" />
          <Workout title="Legs" imageSrc="../../img/quadri.jpeg" />
          <Workout title="Back" imageSrc="../../img/back.jpeg" />
        </div>

        <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <Yoga
            className="compo-yoga"
            title="Yoga"
            imageUrl="../img/yoga.jpeg"
            body="Prenez le temps d'apprendre à connaître votre cotre corps et votre esprit."
          />

          <Pilates className="compo-pilates" title="Pilates" imageUrl="../img/pilates.jpeg" body="Lorem ipsum dolor sit amet, consect" />
        </div>
      </div>
    </div>
  );
}
export default Sport;
