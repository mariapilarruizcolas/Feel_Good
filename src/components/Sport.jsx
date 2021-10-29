import React from 'react';
import { useState } from 'react';
import './sport.css';
import Workout from './Workout';

function Sport() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Se Dépenser
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Se Relaxer
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <Workout
            title="Arms Workout"
            imageSrc="../../img/arms.jpeg"
            body="Améliorez votre force des bras et votre force avec des exercices spécifiques"
          />
          <Workout title="Chest Workout" imageSrc="../../img/chest.jpeg" body="Programme de renforcement des muscles pectoraux, exercices variés" />
          <Workout
            title="Abs Workout"
            imageSrc="../../img/abs.jpeg"
            body=" Entaînez efficacement vos muscles abdominaux et faites sortir la tablette"
          />
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <Workout
            title="Yoga"
            imageSrc="../../img/yoga.jpeg"
            body="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,"
          />
          <Workout title="Pilate" imageSrc="../../img/pilate.jpeg" body="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet" />
        </div>
      </div>
    </div>
  );
}
export default Sport;
