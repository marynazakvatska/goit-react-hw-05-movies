import { Switch, Route } from 'react-router-dom';
import css from './App.css';
/* import AppBar from './components/AppBar/AppBar'; */
import Container from './components/Container/Container';
import MoviesPage from './components/MoviesPage/MoviesPage';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
   <Container> 
      {/* <AppBar /> */}
        <Navigation/>
<Switch>
      <Route path='/' exact  >
<HomePage/>
      </Route>

 <Route path='/movies'  exact >
<MoviesPage />
      </Route>

      <Route  path='/movies/:movieId' >
<MovieDetailsPage />
      </Route>

      {/*  <Route exact path='/movies/:movieId/cast' >
<Cast />
      </Route>

       <Route  exact path='/movies/:movieId/reviews'>
<Reviews />
      </Route> */}

        <Route>
<NotFound />
      </Route>
</Switch>
 </Container>
  );
}

export default App;


/* API Key: edcdf711db36953031d9e29f76dede63 */