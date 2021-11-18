import React, { useState } from 'react';
import Modal from 'react-modal';

import './Yoga.css';

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

      <div className="btn-workout-relax">
        <button className="bouton-workout-relax" onClick={() => setmodalIsOpen(true)}>
          Voir plus
        </button>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
          <div>
            <button className="closeModal" onClick={() => setmodalIsOpen(false)}>
              X
            </button>
          </div>

          <title className="exercise-yoga-title">LA POSE DU COBRA</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul className="desc-exo-pilates">
                <li>Allongez-vous, jambes et bras tendus, ballon placé sous votre bassin.</li>
                <li>Surélevez légèrement les pieds du sol, en rassemblant vos abdominaux.</li>
                <li>À l’inspiration, levez les jambes à la perpendiculaire du sol, pieds pointés vers le ciel.</li>
                <li>Maintenez la posture pendant 5 respirations.</li>
                <li>
                  À la dernière expiration, redescendez lentement les jambes, sans poser les pieds au sol. Les cuisses et le ventre sont mobilisés.
                </li>
                <li>Remontez les jambes 4 fois.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/pi1.jpg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA POSTURE DU BATEAU</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul className="desc-exo-pilates">
                <li>
                  Asseyez-vous en vous adossant à votre ballon. Pour ce faire, placez-le contre votre dos : soit dans le creux de vos reins (pour les
                  expertes !), soit contre vos dorsales (pour les débutantes). Trouvez votre équilibre sur vos fesses.
                </li>
                <li>Fléchissez les jambes, pieds légèrement décollés du sol, mains derrière les genoux.</li>
                <li>À l’inspiration, levez les jambes à la perpendiculaire du sol, pieds pointés vers le ciel.</li>
                <li>Maintenez la posture pendant 5 respirations, puis redescendez lentement.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/pi2.jpg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA PLANCHE</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul className="desc-exo-pilates">
                <li>Allongez-vous sur le sol, jambes tendues, bras de part et d’autre de votre corps.</li>
                <li>Placez votre petit ballon sous vos fesses et vos lombaires.</li>
                <li>
                  À l’inspiration, levez-vos jambes en chandelle. Elles doivent être tendues, tandis que le ballon est bien calé sous le bas de votre
                  dos.
                </li>
                <li>
                  A l’expiration, descendez l’une de vos jambes vers l’avant, sans la poser au sol, et l’autre vers l’arrière. Les pieds pointent dans
                  chaque direction.
                </li>
                <li>
                  Alternez la position des jambes une dizaine de fois, dans un mouvement de ciseaux, en veillant à garder l’équilibre sur le ballon.
                </li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/pi3.jpg" alt="" />
          </div>
          <title className="exercise-yoga-title"> LA POSTURE DE LIBÉRATION DES VENTS</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul className="desc-exo-pilates">
                <li>Allongez-vous au sol, genoux pliés, ballon placé sous vos pieds. Les bras, épaules et nuque sont bien ancrés au sol.</li>
                <li>Mobilisez vos fessiers et vos abdominaux.</li>
                <li>À l’inspiration, levez hanches, ventre et fesses vers le ciel, et accompagnez le mouvement en tendant les bras devant vous.</li>
                <li>Maintenez la posture 5 à 10 secondes. Le ballon aide à maintenir le corps dans l’axe, tout en jouant avec votre équilibre.</li>
                <li>Sur la dernière expiration, redescendez doucement : dos, lombaires, bassin, fesses.Répétez le mouvement 20 fois.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/pi4.jpg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA POSTURE DE L’ARC</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul className="desc-exo-pilates">
                <li>Asseyez-vous, jambes tendues devant vous, dos droit comme si vous étiez adossée à un mur, en équilibre sur les ischions.</li>
                <li>Prenez votre ballon entre vos mains et tendez-le devant vous.</li>
                <li>
                  À l’inspiration, enroulez le dos en tendant au maximum le ballon (et donc, les bras !) vers l’avant. Le haut du dos part vers
                  l’avant tandis que les abdos sont « tirés » vers l’arrière.
                </li>
                <li>
                  Maintenez la posture pendant 5 respirations puis, à la dernière expiration, déroulez votre dos doucement pour reprendre la position
                  initiale.
                </li>
                <li>Répétez 5 fois.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/pi5.jpg" alt="" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Pilates;
