import React, { useEffect, useState } from 'react';
import emailjs, { init } from 'emailjs-com';

import './Footer.css';

function Footer() {
  const [fname, setFname] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [sujet, setSujet] = useState();

  useEffect(() => {
    init('user_0gLxAobao5UEa4i5G80TE');
  }, []);

  function handleSendEmail(e) {
    e.preventDefault();
    alert(e.target.value);

    const templateParams = {
      fname: fname,
      emailAddress: emailAddress,
      sujet: sujet,
    };
    emailjs.send('service_zi12ihe', 'template_wmmlaj9', templateParams);
  }

  return (
    <div className="container-footer">
      <title className="title-footer">Formulaire de contact</title>
      <form>
        <div className="name-input">
          <label htmlFor="fname">Nom et prénom: </label>
          <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" onChange={(e) => setFname(e.target.value)}></input>
        </div>
        <div className="email-input">
          <label htmlFor="emailAddress">Email:</label>
          <input id="emailAddress" type="email" name="email" placeholder="Votre email" onChange={(e) => setEmailAddress(e.target.value)}></input>
        </div>
        <label className="msg-message" htmlFor="sujet">
          Message:
        </label>
        <textarea type="text" id="sujet" name="sujet" placeholder="L'objet de votre message" onChange={(e) => setSujet(e.target.value)}></textarea>
        <button className="btnFooter" value="Merci pour votre message!" onClick={handleSendEmail}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Footer;
