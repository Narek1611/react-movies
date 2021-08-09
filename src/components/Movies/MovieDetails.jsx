import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getImgUrl, getMovieById } from '../../services/services';
import Loader from '../Loader/Loader';
import StarsIcon from '@material-ui/icons/Stars';
import './MovieDetails.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovieDetails(response);
      setLoading(false);
    });
  }, []);

  return (
    <section className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <div className='containerGeneral'>
          <img src={getImgUrl(movieDetails.backdrop_path)} className='img'/>
        </div>
      )}
    </section>
  );
}








{/* <div className="page">
          <img
            className="backgroundDetails"
            src={getImgUrl(movieDetails.backdrop_path)}
            alt={movieDetails.title}
            width="100%"
            height="100%"
          />
          <div className="container">
            <div className="poster">
              <img
                className="backgroundPath"
                src={getImgUrl(movieDetails.poster_path)}
                alt={movieDetails.title}
                width="100%"
              />
            </div>
            <div className="date">{movieDetails.release_date}</div>
            <div className="info">{movieDetails.status}</div>
            <div className="title">{movieDetails.title}</div>
            <div className="overview">
              <i>{movieDetails.overview}</i>
            </div>
            <div className="rating">
              <StarsIcon className="icon" />
              {movieDetails.vote_average}
            </div>
            <div className="status">
              <i>{movieDetails.tagline}</i>
            </div>
            <div className="runtime">{movieDetails.runtime} mins</div>
          </div>
        </div> */}