import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import RecipesSearch from './RecipesSearch';
import RecipeModal from './RecipeModal';

import './Recipes.css';

function Recipes() {
  const API_ID = '03e0caa6';
  const API_KEY = 'd5cd0ae20bd99294c54f4916e7073408';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const [dataModal, setDataModal] = useState();

  const handleModal = (e, label) => {
    e.preventDefault();
    const modal = recipes.find((item) => item.recipe.label === label);
    setDataModal(modal);
  };

  const handClose = () => {
    setDataModal(null);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const getSearchFish = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const getSearchDiet = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  const getSearchVegi = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); // &from=0&to=100  add this on last of line for more recipes
    const data = await response.json();
    setRecipes(data.hits);
  };
  const getSearchProtein = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); // &from=0&to=100  add this on last of line for more recipes
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="recipes">
      <form className="form_search" onSubmit={getSearch}>
        <input className="bar_search" type="text" value={search} onChange={updateSearch} placeholder="recettes"></input>
        <button className="btn_search btn-valid" type="submit">
          Valider
        </button>
      </form>
      <div className="btn-all">
        <button className="btn-prot btn-selection" onClick={getSearchProtein} value="prot">
          Recettes Protéinés
        </button>
        <button className="btn-diet btn-selection" onClick={getSearchDiet} value="diet">
          Recettes Allégées
        </button>
        <button className="btn-fish btn-selection" onClick={getSearchFish} value="fish">
          Recettes de la Mer
        </button>
        <button className="btn-vegi btn-selection" onClick={getSearchVegi} value="vegi">
          Recettes Végétariennes
        </button>
        <button className="btn-beef btn-selection" onClick={getSearchVegi} value="beef">
          Recettes de viandes
        </button>
      </div>
      <div className="recipesSearch">
        {recipes.map((recipe) => (
          <RecipesSearch key={recipe.recipe.label} label={recipe.recipe.label} image={recipe.recipe.image} handleModal={handleModal} />
        ))}
        {dataModal && <RecipeModal recipe={dataModal} close={handClose} />}
      </div>
    </div>
  );
}

export default Recipes;
