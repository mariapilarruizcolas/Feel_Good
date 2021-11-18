import React from 'react';
import './ShowRestaurants.css';
import { useEffect, useState } from 'react/cjs/react.development';
import Restaurants from './Restaurants';
import axios from 'axios';

function ShowRecipes() {
  const [restaurants, setRestaurants] = useState(); // State  upload data from API
  const API_TOKEN =
    'GoDl5poS909gRcyIW3PUMFROIB9BibQ59t0Lk7GJtnR4V5DTjq6-ssjbbR9y2SCAp6128zOoXU29OaJtC3t70XHYRGTbrfdvR61Xfte5tWq_luo5dZ5ma5ZUsh-WYXYx';
  //const [queryLocation, setQueryLocation] = useState('paris');
  const [queryFood, setQueryFood] = useState('asian');
  const [queryCity, setQueryCity] = useState('paris');
  const [search, setSearch] = useState(''); // State  search bar with state  onChange
  const [search1, setSearch1] = useState(''); // State  search bar with state  onChange
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
    e.preventDefault(); //  for stop refreching with default like everything it's ok  oterwise any writting it will ask request to api
    setQueryFood(search); // for validation users  of search bar   form ( onSubmit )
    setQueryCity(search1);
    setSearch(''); // For reset bar search on bar
    setSearch1(''); // For reset bar search on bar
  };
  return (
    <div className="restaurants">
      <form className="form_search" onSubmit={getSearch}>
        <input className="bar_search_food" type="text" value={search} onChange={updateSearch} required placeholder="Restaurants"></input>
        <input className="bar_search_city" type="text" value={search1} onChange={updateSearchCity} required placeholder="Ville"></input>
        <button className="btn_search" type="submit">
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
