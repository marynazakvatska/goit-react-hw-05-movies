

/* https://developers.themoviedb.org/3/search/search-movies -
поиск кинофильма по ключевому слову на странице фильмов. */


import {useState, useEffect} from "react";
import React, { useLayoutEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";

 

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) return;

    const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(response => response.json())
      .then(data => data.results)
      .then(movies => setMovies(movies))
  
  }, [searchQuery])



  const handleSubmit = query => {

    if (!query || query === searchQuery) return;

    setMovies([]);

    history.push({
      ...location,
      search: `query=${query}`,
    }); 
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={{ pathname: `/movies/${movie.id}`, state:{from:location}}}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );

}