import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MovieCard from '../MovieCard/MovieCard';
import Box from '@material-ui/core/Box';
import { getGenres, getMoviesByPage } from '../../services/services';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Login from '../Authentication/Login/Login';
import MovieDetail from '../MovieDetails/MovieDetails';
import { findGenreName } from '../../helpers/findGenreName';
import './Home.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMoviesByPage(1).then(({ results }) => {
      setMovies(results);
    });
  }, []);

  useEffect(() => {
    getGenres().then(({ genres }) => {
      setGenres(genres);
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
                    genre={findGenreName(genres, movie.genre_ids)}
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
          <Route path="/:id" children={<MovieDetail />}></Route>
        </Switch>
      </div>
    </Router>
  );
}
