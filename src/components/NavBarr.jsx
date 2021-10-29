import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarr.css';
function NavBarr() {
  return (
    <div>
      <div className="NavBarrDescktop">
        <ul className="Header">
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
      <div className="NavBarrMobile">
        <ul className="Top">
          <li>
            <NavLink activeClassName="active" to="/BienBouger">
              <a href="./BienBouger" className="logo">
                <img className="logo" src="../img/bienBouger.png" alt="Bien Bouger" />
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/BienManger">
              <a href="./BienManger.jsx" className="logo">
                <img className="logo" src="../img/bienManger.png" alt="Bien Manger" />
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/BienDansSaTete">
              <a href="./BienDansSaTete.jsx" className="logo">
                <img className="logo" src="../img/bienDansSaTete.png" alt="Bien Dans Sa Tete" />
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarr;
