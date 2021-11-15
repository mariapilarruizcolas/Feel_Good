import React from 'react';
import MusicCard from './MusicCard';

function DisplayMusic({ musicItems }) {
  return (
    <div className="musicCard">
      {musicItems.map((music) => (
        <MusicCard key={music.key} title={music.title} name={music.name} link={music.link} image={music.image} />
      ))}
    </div>
  );
}

export default DisplayMusic;
