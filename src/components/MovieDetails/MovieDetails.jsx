import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/services';

export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMovieById(id).then((res) => {
      setMovieDetail(res);
    });
  }, [id]);

  console.log(movieDetail);
  return movieDetail.length === 0 ? <p>Loading</p> : <p>{movieDetail.title}</p>;
}
