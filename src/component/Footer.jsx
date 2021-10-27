import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="container">
      <h1>Formulaire de contact</h1>
      <form action="/action_page.php">
        <label htmlFor="fname">Nom & prénom</label>
        <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"></input>

        <label htmlFor="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email" placeholder="Votre email"></input>

        <label htmlFor="sujet">Sujet</label>
        <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"></input>

        <input type="submit" value="Envoyer"></input>
      </form>
    </div>
  );
}

export default Footer;
