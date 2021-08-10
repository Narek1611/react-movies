import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImgUrl, getMovieById } from "../../services/services";
import Loader from "../Loader/Loader";
import Box from "@material-ui/core/Box";
import "./MovieDetails.css";

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
    <Box className="backgroundLoader">
      <Loader />
    </Box>
  ) : (
    <div>
      {/* <p>{movieDetail.title}</p> */}
      <img
        className="backgroundDetails"
        src={getImgUrl(movieDetail.backdrop_path)}
        alt="gyago"
        width="100%"
      />
      <div className="container1">
        <div className="poster">
        <img
        src={getImgUrl(movieDetail.poster_path)}
        alt="gyago"
      />
        </div>
        <div className="title">
          <b>{movieDetail.title}</b>
          </div>
        <div className="info">
          <b>About The Film</b>
          <br/>
          {/* <br/> */}
          <p><i>Rating:</i> {movieDetail.vote_average}</p>
          <p><i>Release Date:</i> {movieDetail.release_date}</p>
          <p><i>Runtime:</i> {movieDetail.runtime}m</p>
          {movieDetail.tagline === "" ? <></> : <p><i>Tagline:</i> "{movieDetail.tagline}"</p>}
          <br />
          <b><i>{movieDetail.overview}</i></b>
          </div>
      </div>
    </div>
  );
}