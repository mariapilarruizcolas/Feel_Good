import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import MyIngredientsSearch from './MyIngredientsSearch';
import RecipeModalTwo from './RecipeModalTwo';

function MyIngredients() {
  const [recipes, setRecipes] = useState([]); // State  upload data from API
  const [search, setSearch] = useState(''); // State  search bar with state  onChange
  const [query, setQuery] = useState('chicken'); // State  bar state for user search

  const [dataModal, setDataModal] = useState();

  const handleModal = (e, title) => {
    e.preventDefault();
    const modal = recipes.find((item) => {
      return item.strMeal === title;
    });
    setDataModal(modal);
  };

  const handClose = () => {
    setDataModal(null);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`); // &from=0&to=100  add this on last of line for more recipes
    const data = await response.json();
    setRecipes(data.meals);
  };

  // const for search bar with state  onChange
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
      <div className="recipesSearch"></div>
      {recipes.map((recipe) => (
        <MyIngredientsSearch
          key={recipe.strMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          cuisineType={recipe.strArea}
          handleModal={handleModal}
        />
      ))}
      {dataModal && <RecipeModalTwo recipe={dataModal} close={handClose} />}
    </div>
  );
}

export default MyIngredients;
