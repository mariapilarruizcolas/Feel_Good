import React from 'react';
import axios from 'axios';
import { useState } from 'react';

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
        nouvelle citation
      </button>
      <p className="quotequote">&quot;citation&quot;: {quotes.citation}</p>
      <p className="quotequote">&quot;acteur&quot;: {quotes.infos.acteur}</p>
      <p className="quotequote">&quot;personnage&quot;: {quotes.infos.personnage}</p>
      <p className="quotequote">&quot;saison&quot;: {quotes.infos.saison}</p>
      <p className="quotequote">&quot;épisode&quot;: {quotes.infos.episode}</p>
    </div>
  );
}

export default App;
