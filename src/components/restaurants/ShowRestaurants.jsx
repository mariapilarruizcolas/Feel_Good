import React from 'react';
import './ShowRestaurants.css';
import { useEffect, useState } from 'react/cjs/react.development';
import Restaurants from './Restaurants';
import axios from 'axios';

function ShowRecipes() {
  const [restaurants, setRestaurants] = useState([]); // State  upload data from API
  const API_TOKEN =
    'xt-orXMYc-JAb8Jqkcm0l9RyGdueUcuhsdfPgjAOqIS0vkgycJq1XC9653HgAt50ylxwqIM7iqoAl3lkR3_OgX7B1zOvBf9hqixgKUp0zFh--i6MjQB7_Xrnw3g-gf2B7bFBeWYXYx--Zb26XFS1_8sBGajSXJxPEkVcc8mG6ochjNhz07Q-uCHrQ31gPex1fwBS4skTL-TGUYXYx';
  const [queryLocation, setQueryLocation] = useState('paris');
  const [queryFood, setQueryFood] = useState('asian');
  const [search, setSearch] = useState(''); // State  search bar with state  onChange
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
  }, [queryFood, queryLocation]);

  const getRestaurants = async () => {
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=asian&location=paris`, config);
    setRestaurants(response.data.businesses);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault(); //  for stop refreching with default like everything it's ok  oterwise any writting it will ask request to api
    setQueryLocation(search) & setQueryFood(search); // for validation users  of search bar   form ( onSubmit )
    setSearch(''); // For reset bar search on bar
  };
  return (
    <div className="restaurants">
      <form className="form_search" onSubmit={getSearch}>
        <input className="bar_search_location" type="text" value={search} onChange={updateSearch}></input>
        <button className="btn_search" type="submit">
          Search
        </button>
      </form>
      <div className="restaurants_Search">
        {restaurants.map((restaurant) => (
          <Restaurants key={restaurant.businesses.name} name={restaurant.businesses.name} image={restaurant.businesses.image_url} />
        ))}
      </div>
    </div>
  );
}
export default ShowRecipes;
