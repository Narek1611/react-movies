import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MovieCard from '../MovieCard/MovieCard';
import Box from '@material-ui/core/Box';
import { getMoviesByPage } from '../../services/services';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Login from '../Authentication/Login/Login';
import MovieDetail from '../MovieDetails/MovieDetails';
import './Home.css';

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
            <Box display="flex" flexWrap="wrap" className="backgroundHome">
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/movie/:id" children={<MovieDetail />}></Route>
        </Switch>
      </div>
    </Router>
  );
}
