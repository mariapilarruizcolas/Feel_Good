import React from 'react';
import DisplayMusic from './DisplayMusic';
import './ShowMusic.css';
const musicItems = [
  {
    key: 1,
    title: 'Pour la bonne humeur',
    name: 'Dancing Queen',
    link: 'https://www.deezer.com/search/dancing%20queen%20abba/track',
    image: '../img/abba.jpg',
  },
  {
    key: 2,
    title: 'Pour avoir la pêche',
    name: 'Feel Good Classics',
    link: 'https://www.deezer.com/fr/playlist/7456464544',
    image: '../img/feelGoodMusic.jpg',
  },
  {
    key: 3,
    title: 'Pour tout oublier',
    name: 'Relaxation list',
    link: 'https://www.deezer.com/search/relaxation/track',
    image: '../img/relaxation.jpg',
  },
  {
    key: 4,
    title: 'Pour danser toute la nuit',
    name: 'Disco list',
    link: 'https://www.deezer.com/fr/album/77264522',
    image: '../img/discoball.jpg',
  },
];
function ShowMusic() {
  return (
    <div>
      <h1>Feel Good Music</h1>
      <div>
        <DisplayMusic musicItems={musicItems} />
      </div>
    </div>
  );
}

export default ShowMusic;
