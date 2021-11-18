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
    <div className="containerFooter">
      <title>Formulaire de contact</title>
      <form>
        <label htmlFor="fname">Nom & prénom</label>
        <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" onChange={(e) => setFname(e.target.value)}></input>

        <label htmlFor="emailAddress">Email</label>
        <input id="emailAddress" type="email" name="email" placeholder="Votre email" onChange={(e) => setEmailAddress(e.target.value)}></input>

        <label htmlFor="sujet">Message</label>
        <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message" onChange={(e) => setSujet(e.target.value)}></input>

        <button className="btnFooter" value="Merci pour votre message!" onClick={handleSendEmail}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Footer;
