import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="container-footer">
      <form className="contact_form">
        <div className="row">
          <title>Contactez-Nous </title>
          <label htmlFor="fname">Nom & prénom : </label>
          <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"></input>
          <br />
        </div>
        <div className="row">
          <label htmlFor="emailAddress">Email : </label>
          <input id="emailAddress" type="email" name="email" placeholder="Votre email"></input>
          <br />
        </div>
        <div className="row">
          <label htmlFor="sujet" className="msg">
            Message
          </label>
          <br />
          <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea>
          <br />
        </div>

        <input id="btn-submit" type="submit" value="Send email" />
      </form>
    </div>
  );
}

export default Footer;
