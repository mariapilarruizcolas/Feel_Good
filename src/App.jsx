import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarr from './components/NavBarr';
import FeelGoodRecipes from './components/FeelGoodRecipes';
import Sport from './components/Sport';
import FeelZen from './components/FeelZen';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <div className="title-home">
        <h2>Le plus grand secret pour le bonheur, c&apos;est d&apos;être bien avec soi.</h2>
        <h3>Alors Feel Good Avec Nous</h3>
      </div>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Sport" component={Sport} />
            <Route path="/FeelGoodRecipes" component={FeelGoodRecipes} />
            <Route path="/FeelZen" component={FeelZen} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
