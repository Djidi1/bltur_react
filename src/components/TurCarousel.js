import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {makeStyles} from "@material-ui/core/styles";
import { CardMedia } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: '20vw',
    borderRadius: '0 0 4px 4px',
  },
});

export const TurCarousel = () => {
  const items = [
    {
      key: "water",
      Name: "",
      Image: "https://source.unsplash.com/weekly?water"
    },
    {
      key: "city",
      Name: "",
      Image: "https://source.unsplash.com/weekly?city"
    },
    {
      key: "house",
      Name: "",
      Image: "https://source.unsplash.com/weekly?house"
    },
  ];

  return (
    <Carousel animation="fade" indicators={false}>
      { items.map(item => <Item key={item.key} item={item} />) }
    </Carousel>
  )
}

const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <CardMedia
      className={classes.media}
      image={item.Image}
      title={item.Name}
    >
      <Typography className="MediaCaption">
        {item.Name}
      </Typography>
    </CardMedia>
  )
}
