import React from 'react';
import { useState, useEffect } from 'react';
import ShowMusic from './ShowMusic';
import ShowQuotes from './ShowQuotes';
import { useParams } from 'react-router';

function FeelZen() {
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    setToggleState(Number(id));
  }, [id]);
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(3)}>
          Musique
        </button>
        <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => setToggleState(4)}>
          Citations
        </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 3 ? 'content  active-content' : 'content'}>
          <div className="Music">
            <ShowMusic />
          </div>
        </div>

        <div className={toggleState === 4 ? 'content  active-content' : 'content'}>
          <div className="Quotes">
            <ShowQuotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeelZen;
