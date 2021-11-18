import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import RecipesSearch from './RecipesSearch';
import './Recipes.css';
import RecipeModal from './RecipeModal';

//import axios from axios;

function Recipes() {
  const API_ID = '03e0caa6'; //03e0caa6 // 076b5b4e       API ID
  const API_KEY = 'd5cd0ae20bd99294c54f4916e7073408'; //d5cd0ae20bd99294c54f4916e7073408 // 89dcacb527cb1b9261cd1de41587da7e     API KEY

  const [recipes, setRecipes] = useState([]); // State  upload data from API
  const [search, setSearch] = useState(''); // State  search bar with state  onChange
  const [query, setQuery] = useState(''); // State  bar state for user search

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
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); // &from=0&to=100  add this on last of line for more recipes
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault(); //  for stop refreching with default like everything it's ok  oterwise any writting it will ask request to api
    setQuery(search); // for validation users  of search bar   form ( onSubmit )
    setSearch(''); // For reset bar search on bar
  };

  const getSearchFish = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); // &from=0&to=100  add this on last of line for more recipes
    const data = await response.json();
    setRecipes(data.hits);
  };
  const getSearchDiet = async (e) => {
    setQuery(e.target.value);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`); // &from=0&to=100  add this on last of line for more recipes
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
        <button className="btn_search" type="submit">
          Valider
        </button>
      </form>
      <div className="btn-all">
        <button className="btn-prot" onClick={getSearchProtein} value="prot">
          Recettes Protéinés
        </button>
        <button className="btn-diet" onClick={getSearchDiet} value="diet">
          Recettes Allégées
        </button>
        <button className="btn-fish" onClick={getSearchFish} value="fish">
          Recettes de la Mer
        </button>
        <button className="btn-vegi" onClick={getSearchVegi} value="vegi">
          Recettes Végétariennes
        </button>
        <button className="btn-beef" onClick={getSearchVegi} value="beef">
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
