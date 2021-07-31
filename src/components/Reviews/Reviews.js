/* https://developers.themoviedb.org/3/movies/get-movie-reviews -
запрос обзоров для страницы кинофильма. */

import {useState, useEffect} from "react";
import React, { useLayoutEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [movies, setMovies] = useState([]);
    const { url } = useRouteMatch();
     const { movieId } = useParams();

  
  

  useEffect(() => {
  
     const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
          .then(response => response.json())
     
        .then(data=>data.results).then(movies=>setMovies(movies))
    
 }, [])
 
  console.log(movies)
  return (
    <div>
          {movies.length > 0  ?
              <ul> 
                  {movies.map(movie => (
                      <li key={movie.id}>
                          {movie.content}
                      </li>))}
              </ul> : <p>No reviews for this movie  </p>
          }


      </div>)
};
 





export default Reviews;