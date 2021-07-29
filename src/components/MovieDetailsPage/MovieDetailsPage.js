/* https://developers.themoviedb.org/3/movies/get-movie-details - 
запрос полной информации о фильме для страницы кинофильма. */
import { useState, useEffect } from "react";
import { useLocation, useParams,  useHistory} from "react-router-dom";
import { Switch, Route, useRouteMatch, NavLink} from 'react-router-dom';
import Cast from '../Cast/Cast';
import PropTypes from "prop-types";


import css from './MovieDetailsPage.module.css';
import Reviews from '../Reviews/Reviews'


export default function MovieDetailsPage() {
      const { url } = useRouteMatch();
    const { movieId } = useParams();
    console.log(movieId)
    const [movie, setMovie] = useState(null);
    const history = useHistory();
  const location = useLocation(); 
  

    useEffect(() => {

        const API_KEY = "edcdf711db36953031d9e29f76dede63";
       
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(response => response.json())
        .then(movie => setMovie(movie))
    .catch(error => error) 
 }, [movieId])

    const onBack = () => {
         console.log(location)
         history.push(location.state?.from ?? '/')
  };
    
          
        return (
            <>
          <button type="button" onClick={onBack}>Go back</button> 
      {movie && (
                    <div >
                 
                        
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
               <hr />
          <div>
                            <p>Additional information</p>
                            <ul>
            
             <li><NavLink to={`${url}/cast`} className={css.navLink} activeClassName={css.navLinkactive}>Cast</NavLink></li>
              <li><NavLink to={`${url}/reviews`} className={css.navLink} activeClassName={css.navLinkactive}>Reviews</NavLink></li>
                            </ul>
                      <hr />   
                        </div>
       
          <Switch>
            <Route path="/movies/:movieId/cast">
             <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
          </Switch>
        </div>
                )}
               
    </>
  );

}
