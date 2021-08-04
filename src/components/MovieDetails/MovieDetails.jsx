import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImgUrl, getMovieById } from '../../services/services';
import Loading from '../Loading/Loading';
import StarsIcon from '@material-ui/icons/Stars';
import Box from '@material-ui/core/Box';
import './MovieDetails.css';

export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMovieById(id).then((res) => {
      setMovieDetail(res);
    });
  }, [id]);

  console.log(movieDetail);
  return movieDetail.length === 0 ? (
    <Box className="backgroundLoading">
      <Loading />
    </Box>
  ) : (
    <Box>
      <img
        className="backgroundDetails"
        src={getImgUrl(movieDetail.backdrop_path)}
        alt={movieDetail.title}
        width="100%"
      />
      <Box className="container">
        <Box className="poster">
          <img
            className="backgroundPath"
            src={getImgUrl(movieDetail.poster_path)}
            alt={movieDetail.title}
            width="100%"
          />
        </Box>
        <Box className="date">
          <b>{movieDetail.release_date}</b>
        </Box>
        <Box className="info">
          <b>{movieDetail.status}</b>
        </Box>
        <Box className="title">
          <b>{movieDetail.title}</b>
        </Box>
        <Box className="overview">
          <i>{movieDetail.overview}</i>
        </Box>
        <Box className="rating">
          <StarsIcon /> 
          {movieDetail.vote_average}
        </Box>
        <Box className="status">
          <i>{movieDetail.tagline}</i>
        </Box>
        <Box className="runtime">
          {movieDetail.runtime} minute ,
          <span>{movieDetail.original_language}</span>
        </Box>
      </Box>
    </Box>
  );
}
