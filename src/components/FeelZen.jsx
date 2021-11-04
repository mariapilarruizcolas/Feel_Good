import React from 'react';
import { useState } from 'react';
import ShowMusic from './ShowMusic';
import ShowQuotes from './ShowQuotes';
import './FeelZen.css';

function FeelZen() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Musique
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Citations
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <div className="Music">
            <ShowMusic />
          </div>
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <div className="Quotes">
            <ShowQuotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelZen;
