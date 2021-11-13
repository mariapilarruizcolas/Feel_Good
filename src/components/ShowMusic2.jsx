import React from 'react';
import DisplayMusic from './DisplayMusic';
import './ShowMusic.css';

const musicItems = [
  {
    title: 'Dancing Queen',
    link: 'https://www.deezer.com/search/dancing%20queen%20abba/track',
    image: '',
  },
  {
    title: "Don't worry be happy",
    link: "https://www.deezer.com/search/dont't%20worry%20be%20happy",
    image: 'https://bit.ly/2GJFu5W',
  },
  {
    title: 'Relaxation list',
    link: 'https://www.deezer.com/search/relaxation/track',
    image: 'https://bit.ly/2GJFu5W',
  },
  {
    title: 'Disco list',
    link: 'https://www.deezer.com/fr/album/77264522',
    image: 'https://bit.ly/2GJFu5W',
  },
];
function ShowMusic() {
  return (
    <div>
      <h1>Feel Good Music</h1>
      <DisplayMusic musicItems={musicItems} />
    </div>
  );
}

export default ShowMusic;
