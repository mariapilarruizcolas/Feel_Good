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
  const [query, setQuery] = useState('chicken'); // State  bar state for user search

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

  return (
    <div className="recipes">
      <form className="form_search" onSubmit={getSearch}>
        <input className="bar_search" type="text" value={search} onChange={updateSearch}></input>
        <button className="btn_search" type="submit">
          Search
        </button>
      </form>
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
