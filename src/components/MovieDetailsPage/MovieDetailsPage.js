/* https://developers.themoviedb.org/3/movies/get-movie-details - 
запрос полной информации о фильме для страницы кинофильма. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import { NavLink } from 'react-router-dom';
import Reviews from '../Reviews/Reviews'


export default function MovieDetailsPage() {
      const { url } = useRouteMatch();
    const { movieId } = useParams();
    console.log({movieId})
    const [movie, setMovie] = useState(null);
  

    useEffect(() => {

        const API_KEY = "edcdf711db36953031d9e29f76dede63";
       
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
     
            .then(response => response.json())
        .then(data => data.results)
        .then(movie => setMovie(movie))
  
 }, [movieId])
           
          
        return (
    <>
      {movie && (
                    <div>
                  {/*     <NavLink exact to='/'  className={css.navLink} activeClassName={css.navLinkactive} >
          <button type="button" >Go back</button> </NavLink> */}
                        
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
          <div>
            <p>Additional information</p>
            <Link to={`${url}/cast`}>Cast</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
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