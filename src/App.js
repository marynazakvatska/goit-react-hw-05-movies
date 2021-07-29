import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container'; 

const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));


export default function App() {
  return (
   <Container> 
      <AppBar />

 <Suspense fallback={<h1>ЗАГРУЖАЕМ...</h1>} >
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
  </Suspense>
 </Container>
  );
}



