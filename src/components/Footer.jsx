import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="containerFooter">
      <title>Formulaire de contact</title>
      <form action="/action_page.php">
        <label htmlFor="fname">Nom &amp; prénom</label>
        <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"></input>

        <label htmlFor="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email" placeholder="Votre email"></input>

        <label htmlFor="sujet">Message</label>
        <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"></input>

        <input type="submit" value="Envoyer"></input>
      </form>
    </div>
  );
}

export default Footer;
