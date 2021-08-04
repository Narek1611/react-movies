import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getImgUrl } from '../../services/services';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '63vh',
    margin: '27px',
    boxShadow: '5px 5px 1px dimgrey',
    border: '1px solid dimgrey',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`/${props.id}`}>
        <CardHeader title={props.title} subheader={props.releaseDate} />
      </Link>

      <Link to={`/${props.id}`}>
        <CardMedia
          className={classes.media}
          image={getImgUrl(props.path)}
          title={props.title}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.aboutFilm.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          {props.genre.map((genre) => {
            return (
              <ul className="genreNames">
                {' '}
                <li>
                  <LabelImportantIcon /> {genre}
                </li>{' '}
              </ul>
            );
          })}
        </Typography>
      </CardContent>
      <CardContent>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
