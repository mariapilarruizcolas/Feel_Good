import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarr.css';
function NavBarr() {
  return (
    <div>
      <div className="NavBarrDescktop">
        <ul className="Header">
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/Sport">
              Bien bouger
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelGoodRecipes">
              Bien Manger
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelZen">
              Bien dans sa tête
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="NavBarrMobile">
        <ul className="Bottom">
          <li>
            <NavLink activeClassName="active" to="/Sport">
              <a href="./Sport" className="logo">
                <img className="logo" src="../img/Sport.png" alt="Bien Bouger" />
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelGoodRecipes">
              <a href="./FeelGoodRecipes.jsx" className="logo">
                <img className="logo" src="../img/feelGoodRecipes.png" alt="Feel Good Recipes" />
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelZen">
              <a href="./FeelZen.jsx" className="logo">
                <img className="logo" src="../img/feelZen.png" alt="Feel Zen Feel Good" />
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarr;
