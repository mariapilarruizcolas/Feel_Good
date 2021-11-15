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
            <NavLink activeClassName="active" to="/Sport/1">
              Bien bouger
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelGoodRecipes">
              Bien Manger
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelZen/3">
              Bien dans sa tête
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="NavBarrMobile">
        <ul className="Bottom">
          <li>
            <NavLink activeClassName="active" to="/Sport">
              <img className="logo" src="../img/Sport.png" alt="Bien Bouger" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelGoodRecipes">
              <img className="logo" src="../img/feelGoodRecipes.png" alt="Feel Good Recipes" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelZen">
              <img className="logo" src="../img/feelZen.png" alt="Feel Zen Feel Good" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarr;
