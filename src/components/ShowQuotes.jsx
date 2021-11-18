import axios from 'axios';
import React, { useState } from 'react';

import './ShowQuotes.css';

function App() {
  const [quotes, setQuotes] = useState({
    citation:
      " Oh, mais c'est pas vrai, mais vous allez m'gonfler jusqu'à quand ? Une heure que j'crapahute dans tout le château avec ma bougie, ça va bien, maintenant !",
    infos: {
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I ',
      episode: 'Haunted',
    },
  });

  const getQuote = () => {
    axios
      .get('https://cors-bypass.tkzprod.dev/kaamelott.chaudie.re/api/random')
      .then((res) => res.data)
      .then((data) => {
        setQuotes(data.citation);
      });
  };

  return (
    <div className="Quotes">
      <button className="QuotesBtn" onClick={getQuote}>
        Nouvelle Citation
      </button>

      <div id="ct">
        <div className="corner " id="left_top"></div>
        <div className="corner" id="left_bottom"></div>
        <div className="corner" id="right_top"></div>
        <div className="corner" id="right_bottom"></div>
        <span>{quotes.infos.acteur}</span>
        <blockquote>
          <p>
            <i>&ldquo;{quotes.citation}&rdquo; </i>
          </p>
        </blockquote>
        <p className="quote">
          <h2> {quotes.infos.personnage}</h2>
        </p>
        <p className="quote">
          Saison {quotes.infos.saison} épisode {quotes.infos.episode}
        </p>
      </div>
    </div>
  );
}

export default App;
