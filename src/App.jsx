import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarr from './components/NavBarr';
import Home from './components/Home';
import BienManger from './components/BienManger';
import BienBouger from './components/BienBouger';
import BienDansSaTete from './components/BienDansSaTete';

/*import 'App.css';*/

function App() {
  return (
    <div>
      <NavBarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/BienBouger" component={BienBouger} />
        <Route exact path="/BienManger" component={BienManger} />
        <Route exact path="/BienDansSaTete" component={BienDansSaTete} />
      </Switch>
    </div>
  );
}

export default App;