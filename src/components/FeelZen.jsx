import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ShowMusic from './ShowMusic';
import ShowQuotes from './ShowQuotes';

function FeelZen() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    setToggleState(id);
  }, [id]);
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 'music' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('music')}>
          Musique
        </button>
        <button className={toggleState === 'quotes' ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState('quotes')}>
          Citations
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 'music' ? 'content  active-content' : 'content'}>
          <div className="Music">
            <ShowMusic />
          </div>
        </div>

        <div className={toggleState === 'quotes' ? 'content  active-content' : 'content'}>
          <div className="Quotes">
            <ShowQuotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelZen;
