import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { routes } from '../routes/routes'
import {
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    background: 'rgba(255, 255, 255, .5)',
    borderRadius: 4,
    padding: '4px 16px',
    "& a": {
      color: '#000',
    }
  }
}));

const getPathData = (routes, path) => {
  return routes.find(x => x.path === `/${path}` || x.path.includes(path)) || {};
}

export const AppBreadcrumbs = ({location}) => {
  const classes = useStyles();
  const pages = location.pathname.split('/');
  return (
    <Breadcrumbs
      className={classes.breadcrumbs}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {pages.map(page => {
        const pathData = getPathData(routes, page);
        if (pathData.path === location.pathname) {
          return <Typography color="textPrimary">{pathData.title}</Typography>
        }
        return <Link color="textPrimary" to={pathData.path}>{pathData.title}</Link>
      })}
    </Breadcrumbs>
  );
}
