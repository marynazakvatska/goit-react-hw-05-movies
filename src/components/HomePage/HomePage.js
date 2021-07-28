/* https://developers.themoviedb.org/3/trending/get-trending - 
список самых популярных фильмов на сегодня для создания
коллекции на главной странице. */
import {useState, useEffect} from "react";
import React, { useLayoutEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

  
  

  useEffect(() => {
  
     const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(movies => setMovies(movies))
  
 }, [])
 
  
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies && movies.map(movie => (
          <li key={movie.id}>
            { movie.original_title  ? <Link to={`/movies/${movie.id}`}>{movie.title}</Link> :
              <Link to={`${url}/${movie.id}`}> {movie.name}</Link>}
            </li>))}
      </ul>


      </div>)
};
 





export default HomePage;