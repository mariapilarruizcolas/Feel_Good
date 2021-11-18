import React, { useEffect, useState } from 'react/cjs/react.development';

import MyIngredientsSearch from './MyIngredientsSearch';
import RecipeModalTwo from './RecipeModalTwo';

function MyIngredients() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
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
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setRecipes(data.meals);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
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
