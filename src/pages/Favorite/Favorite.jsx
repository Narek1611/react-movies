import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MovieCard from '../../components/Movies/MovieCard';
import { storage } from '../../constants/storage';
import { getLocalStorage } from '../../helpers/localStorage';
import { Routes } from '../../constants/routes';
import PropTypes from 'prop-types';
import './Favorite.css';

export default function Favorite({ isAuth }) {
  const movies = getLocalStorage(storage.favorites)
    ? getLocalStorage(storage.favorites)
    : [];

  const [fakeState, setFakeState] = useState(1);

  const fakeRender = () => {
    setFakeState(fakeState + 1);
  };
  return isAuth ? (
    <section className='container'>
      {!movies.length ? (
        <h2>You have not any favorite</h2>
      ) : (
        movies.map((movie) => {
          return (
            <MovieCard
              fakeRender={fakeRender}
              key={movie.id}
              title={movie.title}
              imgPath={movie.imgPath}
              genres={movie.genres}
              id={movie.id}
            />
          );
        })
      )}
    </section>
  ) : (
    <Redirect to={Routes.login.url} />
  );
}

Favorite.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
