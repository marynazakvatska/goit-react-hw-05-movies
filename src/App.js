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

      
        <Route>
<NotFound />
      </Route>
</Switch>
 </Container>
  );
}

export default App;


