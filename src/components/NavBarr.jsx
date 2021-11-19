import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBarr.css';

function NavBarr() {
  return (
    <div>
      <div className="NavBarrDescktop">
        <ul className="Header">
          <li className="navBar">
            <NavLink activeClassName="active" to="/">
              <img className="logo" src="../img/logo.png" alt="Feel Good Home" />
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Sport/workout">
              Bien Bouger
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/FeelGoodRecipes/recipes">
              Bien Manger
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/FeelZen/music">
              Bien dans sa Tête
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="NavBarrMobile">
        <ul className="Bottom">
          <li>
            <NavLink activeClassName="active" to="/">
              <img className="logo" src="../img/logo.png" alt="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/Sport/workout">
              <img className="logo" src="../img/sport.png" alt="Bien Bouger" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelGoodRecipes/recipes">
              <img className="logo" src="../img/feelGoodRecipes.png" alt="Feel Good Recipes" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/FeelZen/music">
              <img className="logo" src="../img/feelZen.png" alt="Feel Zen Feel Good" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarr;
