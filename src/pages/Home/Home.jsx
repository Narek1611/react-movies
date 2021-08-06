import { useEffect, useState } from 'react';
import { getMoviesByPage, getMovieByQuery } from '../../services/services';
import Header from '../../components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieDetails from '../../components/Movies/MovieDetails';
import Movies from '../../components/Movies/Movies';
import Favorite from '../Favorite/Favorite';
import { Routes } from '../../constants/routes';
import { getLocalStorage } from '../../helpers/localStorage';
import { storage } from '../../constants/storage';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(1);
  const isAuth = getLocalStorage(storage.isAuth);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getMoviesByPage(offset).then((res) => {
      setMovies([...movies, ...res.results]);
      setLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      getMovieByQuery(searchQuery)
        .then((res) => {
          setMovies(res.results);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      getMoviesByPage(1).then((res) => {
        setMovies(res.results);
        setLoading(false);
      });
    }
  }, [searchQuery]);
  return isAuth ? (
    <>
      <Header handleSearchInput={handleSearchInput} />
      <Switch>
        <Route exact path={Routes.home.url}>
          <Movies
            setOffset={setOffset}
            isAuth={isAuth}
            loading={loading}
            movies={movies}
          />
        </Route>

        <Route path="/home/favorites">
          <Favorite isAuth={isAuth} />
        </Route>

        <Route path="/home/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </>
  ) : (
    <Redirect to="/" />
  );
}
