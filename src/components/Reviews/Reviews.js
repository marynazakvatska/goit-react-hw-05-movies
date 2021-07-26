/* https://developers.themoviedb.org/3/movies/get-movie-reviews -
запрос обзоров для страницы кинофильма. */

import {useState, useEffect} from "react";
import React, { useLayoutEffect } from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [movies, setMovies] = useState(null);
    const { url } = useRouteMatch();
     const { movieId } = useParams();

  
  

  useEffect(() => {
  
     const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data=>data.results).then(movies=>setMovies(movies))
  
 }, [])
 
  
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {movies && movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`${url}/${movieId}/reviews`}>{movie.content}</NavLink>
            </li>))}
      </ul>


      </div>)
};
 





export default Reviews;