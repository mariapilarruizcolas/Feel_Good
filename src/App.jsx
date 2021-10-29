import React from 'react';

import { Switch, Route } from 'react-router-dom';
import NavBarr from './components/NavBarr';
import BienManger from './components/BienManger';
import Sport from './components/Sport';
import BienDansSaTete from './components/BienDansSaTete';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Switch>
        <Route exact path="/Sport" components={Sport} />
        <Route exact path="/BienManger" components={BienManger} />
        <Route exact path="/BienDansSaTete" components={BienDansSaTete} />
      </Switch>
      <Sport />
      <Footer />
    </div>
  );
}

export default App;
