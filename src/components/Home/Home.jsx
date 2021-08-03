import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MovieCard from '../MovieCard/MovieCard';
import Box from '@material-ui/core/Box';
import { getMoviesByPage } from '../../services/services';
import { useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesByPage(1).then(({ results }) => {
      setMovies(results);
    });
  }, []);
  console.log(movies);
  return (
    <div>
      <Navbar />
      <Box display="flex" flexWrap="wrap">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              path={movie.backdrop_path}
            />
          );
        })}
      </Box>
    </div>
  );
}
