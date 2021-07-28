/* https://developers.themoviedb.org/3/movies/get-movie-credits -
запрос информации
о актёрском составе для страницы кинофильма. */

import {useState, useEffect} from "react";
import React, { useLayoutEffect } from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [actors, setActors] = useState([]);
    const { url } = useRouteMatch();
     const { movieId } = useParams();

  
  

  useEffect(() => {
  
     const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(response => response.json())
          .then(data => data.cast).then(cast => setActors(cast))
       .catch(error => error)
 }, [movieId])
 
  
  return (
  
      
      
      <div>
         
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>)
};
 

export default Cast;