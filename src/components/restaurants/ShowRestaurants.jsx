import React, { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';

import Restaurants from './Restaurants';

import './ShowRestaurants.css';

function ShowRecipes() {
  const [restaurants, setRestaurants] = useState();
  const API_TOKEN =
    'GoDl5poS909gRcyIW3PUMFROIB9BibQ59t0Lk7GJtnR4V5DTjq6-ssjbbR9y2SCAp6128zOoXU29OaJtC3t70XHYRGTbrfdvR61Xfte5tWq_luo5dZ5ma5ZUsh-WYXYx';
  const [queryFood, setQueryFood] = useState('asian');
  const [queryCity, setQueryCity] = useState('paris');
  const [search, setSearch] = useState('');
  const [search1, setSearch1] = useState('');
  const config = {
    headers: {
      accept: 'application/json',
      'x-requested-with': 'xmlhttprequest',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
  useEffect(() => {
    getRestaurants();
  }, [queryFood, queryCity]);

  const getRestaurants = async () => {
    const response = await axios(`https://cors-bypass.tkzprod.dev/api.yelp.com/v3/businesses/search?term=${queryFood}&location=${queryCity}`, config);
    setRestaurants(response.data.businesses);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const updateSearchCity = (e) => {
    setSearch1(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQueryFood(search);
    setQueryCity(search1);
    setSearch('');
    setSearch1('');
  };
  return (
    <div className="restaurants">
      <form className="form_search" onSubmit={getSearch}>
        <input className="bar_search_food" type="text" value={search} onChange={updateSearch} required placeholder="Restaurants"></input>
        <input className="bar_search_city " type="text" value={search1} onChange={updateSearchCity} required placeholder="Ville"></input>
        <button className="btn_search bouton-restaurant" type="submit">
          Valider
        </button>
      </form>
      <div className="restaurants_Search">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Restaurants key={restaurant.name} name={restaurant.name} image={restaurant.image_url} categories={restaurant.categories} />
          ))}
      </div>
    </div>
  );
}

export default ShowRecipes;
