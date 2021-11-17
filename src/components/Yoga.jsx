import React, { useState } from 'react';
import Modal from 'react-modal';

import './Yoga.css';

function Yoga({ title, imageUrl, body }) {
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
            <button className="closeModal" onClick={() => setmodalIsOpen(false)}>
              X
            </button>
          </div>

          <title className="exercise-yoga-title">LA POSE DU COBRA</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul>
                <li>- Allongez-vous sur votre ventre, jambes tendues.</li>
                <li>- Placez les paumes au sol, en dessous des épaules.</li>
                <li>- Vérifier que votre menton et vos orteils touchent le sol.</li>
                <li>- Inspirez et soulevez lentement votre poitrine, tentez autant que possible de remonter votre dos à la verticale.</li>
                <li>
                  -Une fois que vous ressemblez à un cobra, tout du moins dans la pose, tenez la position pendant 15 – 30 secondes en fonction de
                  votre capacité.
                </li>
                <li>- Sur l’expiration, reposez l’ensemble de votre corps sur le sol en position initiale.</li>
                <li>- Répétez cette opération au moins 5 fois avec une période de relaxation de 15 secondes après chaque répétition.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/yoga1.jpeg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA POSTURE DU BATEAU</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul>
                <li>- Allongez-vous sur le dos, jambes tendues, bras le long du corps.</li>
                <li>- À l’inspiration, commencez à élever vos jambes sans plier les genoux.</li>
                <li>- Relevez les jambes aussi haut que possible.</li>
                <li>- Maintenant, levez les deux bras en les gardant droits et tentez d’atteindre vos orteils.</li>
                <li>- Essayez de vous rapprocher au plus près d’un angle de 45 degrés.</li>
                <li>- Respirez normalement et maintenez cette pose au moins 15 secondes.</li>
                <li>- Expirez doucement et relâchez.</li>
                <li>- Répétez cette opération au moins 5 fois avec une pause relaxante de 15 secondes entre chaque répétition.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/yoga3.jpeg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA PLANCHE</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul>
                <li>- Mettez vous en place, en inspirant. Tenez-vous allongé, bras tendus, paume des mains sur le sol (doigts bien répartis).</li>
                <li>- Votre corps doit former une ligne droite depuis les talons jusqu’ à la tête.</li>
                <li>- Maintenez cette position pendant 15-30 secondes ou plus pour de meilleurs résultats.</li>
                <li>- Relâchez la pose en reposant les genoux sur le sol lors de l’expiration.</li>
                <li>- Si vous avez de problèmes de dos, des blessures à l’épaule ou une tension artérielle élevée évitez cette pose.</li>
                <li>- Répétez cette opération au moins 5 fois avec des pauses de 15 secondes.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/yoga4.jpeg" alt="" />
          </div>
          <title className="exercise-yoga-title"> LA POSTURE DE LIBÉRATION DES VENTS</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul>
                <li>- Allongez-vous sur le dos, les bras de chaque côté de votre corps et les pieds étendus. Les talons doivent se toucher.</li>
                <li>
                  -Pliez vos genoux et sur l’expiration, amenez progressivement les genoux pliés vers votre poitrine, appliquez une pression sur
                  l’abdomen avec vos cuisses.
                </li>
                <li>- Tenez les genoux bien en place en serrant les mains sous les cuisses.</li>
                <li>- Encore une fois lors de l’expiration, levez la tête pour permettre à votre menton de toucher vos genoux.</li>
                <li>- Maintenez la position pendant 60 à 90 secondes, tout en respirant profondément.</li>
                <li>- Expirez lentement, puis relâchez vos genoux. Mettez vos mains sur chaque côté de votre corps, les paumes vers le sol.</li>
                <li>- Répétez cette opération au moins 5 fois avec des pauses de 15 secondes.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/yoga5.jpeg" alt="" />
          </div>
          <title className="exercise-yoga-title">LA POSTURE DE L’ARC</title>
          <div className="exo-yoga">
            <div className="yoga-description">
              <ul>
                <li>- Couchez-vous sur le ventre, jambes tendues, bras placés de chaque côté du corps.</li>
                <li>- Pliez ensuite les genoux et atteignez vos chevilles avec vos mains.</li>
                <li>- En inspirant, relevez et pliez la tête en arrière. Soulevez dans le même temps vos jambes aussi haut que vous le pouvez.</li>
                <li>- Maintenez cette position pendant 15-30 secondes. Respirez normalement tout en tenant la pose.</li>
                <li>- Sur l’expiration, ramenez lentement votre corps à la position couchée.</li>
                <li>- Répétez cette opération 5 fois avec une relaxation de 15 secondes après chaque répétition.</li>
              </ul>
            </div>
            <img className="img-yoga" src="./../img/yoga2.jpeg" alt="" />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Yoga;
