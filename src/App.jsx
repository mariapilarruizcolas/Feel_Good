import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBarr from './components/NavBarr';
import BienManger from './components/BienManger';
import Sport from './components/Sport';
import BienDansSaTete from './components/BienDansSaTete';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <div className="title-home">
        <h2>Le plus grand secret pour le bonheur, c&apos;est d être bien avec soi.</h2>
        <h3>Alors Feel Good Avec Nous</h3>
      </div>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Sport" component={Sport} />
            <Route path="/BienManger" component={BienManger} />
            <Route path="/BienDansSaTete" component={BienDansSaTete} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
