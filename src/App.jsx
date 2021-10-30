import React from 'react';
import FlipCard from './components/FlipCard';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBarr from './components/NavBarr';
import BienManger from './components/BienManger';
import Sport from './components/Sport';
import BienDansSaTete from './components/BienDansSaTete';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Switch>
        <Route exact path="/Sport" components={Sport} />
        <Route exact path="/BienManger" components={BienManger} />
        <Route exact path="/BienDansSaTete" components={BienDansSaTete} />
      </Switch>
      <div className="title-home">
        <h3>Le plus grand secret pour le bonheur, c est d être bien avec soi.</h3>
        <h4>Alors Feel Good Avec Nous</h4>
      </div>
      <FlipCard />
      <Sport />
      <BienManger />
      <Footer />
    </div>
  );
}

export default App;
