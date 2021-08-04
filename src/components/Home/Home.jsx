import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MovieCard from '../MovieCard/MovieCard';
import Box from '@material-ui/core/Box';
import { getMoviesByPage } from '../../services/services';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import MovieDetail from '../MovieDetails/MovieDetails';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesByPage(1).then(({ results }) => {
      setMovies(results);
    });
  }, []);
  console.log(movies);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Box display="flex" flexWrap="wrap">
              {movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    path={movie.backdrop_path}
                    aboutFilm={movie.overview}
                    releaseDate={movie.release_date}
                  />
                );
              })}
            </Box>
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/:id" children={<MovieDetail />}></Route>
        </Switch>
      </div>
    </Router>
  );
}
