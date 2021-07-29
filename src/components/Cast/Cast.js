/* https://developers.themoviedb.org/3/movies/get-movie-credits -
запрос информации
о актёрском составе для страницы кинофильма. */

import {useState, useEffect} from "react";
import React from 'react';
import { useParams } from "react-router-dom";

const Cast = () => {
  const [actors, setActors] = useState([]);
     const { movieId } = useParams();

  
  

  useEffect(() => {
  
     const API_KEY = "edcdf711db36953031d9e29f76dede63";
    
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(response => response.json())
          .then(data => data.cast).then(cast => setActors(cast))
   
 }, [movieId])
 
  
  return (
  
      
      
      <div>
         
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.cast_id}>
              <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : `https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`}
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