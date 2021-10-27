import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarr.css';

/*import BienManger from './BienManger';
import BienBouger from './BienBouger';
import BienDansSaTete from './BienDansSaTete';
import Home from './components/index.jsx';
className={style.body}*/

function NavBarr() {
  return (
    <div className="NavBarr">
      <ul className="Header">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/BienBouger">
            Bien Bouger
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/BienManger">
            Bien Manger
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/BienDansSaTete">
            Bien dans sa tête
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBarr;
