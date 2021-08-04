import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getImgUrl } from '../../services/services';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '63vh',
    margin: '27px',
    cursor: 'pointer',
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
    <Link to={`/${props.id}`}>
      <Card className={classes.root}>
        <CardHeader title={props.title} subheader={props.releaseDate} />
        <CardMedia
          className={classes.media}
          image={getImgUrl(props.path)}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.aboutFilm}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
