import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/services';
import Loading from '../Loading/Loading';
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
    <p>{movieDetail.title}</p>
  );
}
