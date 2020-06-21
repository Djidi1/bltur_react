import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {
  Card, CardContent, CardHeader,
  Typography,
} from "@material-ui/core";
import { AppBreadcrumbs } from "../../components/AppBreadcrumbs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    flex: 1,
  },
  cardHeader: {
    textAlign: 'center',
    background: '#2196F3',
    color: '#fff',
  },
  cardHeaderLink: {
    color: '#fff',
  },
  CardContent: {
    minHeight: '40vh',
    textAlign: 'center',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  columnTitle: {
    margin: "16px 0",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  columnBgGreen: {
    backgroundColor: "#C8E6C9",
  },
  columnBgPink: {
    backgroundColor: "#d1c4e9",
  },
  columnBgBlue: {
    backgroundColor: "#bbdefb",
  },
  columnBgOrange: {
    backgroundColor: "#FFE0B2",
  },
}));

export const InSpb = ({location}) => {
  const classes = useStyles();

  const pageData = {
    key: 'page_to_spb',
    title: 'Прием в Санкт-Петербурге',
    subtitle: 'групп и индивидуальных туристов',
  };

  const columns = [
    {
      key: 'mini-groups',
      title: 'Для индивидуальных гостей и мини-групп',
      background: 'Orange',
      url: '/прием_в_петербурге/мини-группы',
    },
    {
      key: 'org-groups',
      title: 'Для организованных групп',
      background: 'Blue',
      url: '/прием_в_петербурге/организованные-группы',
    },
    {
      key: 'set-of-groups',
      title: 'Сборные группы',
      background: 'Green',
      url: '/прием_в_петербурге/сборные-группы',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBreadcrumbs location={location} />
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={(
            <>
              <Typography variant='h5'>{pageData.title}</Typography>
              {pageData.subtitle && (
                <Typography variant='body2'>{pageData.subtitle}</Typography>
              )}
              {pageData.subLink && (
                <Typography
                  className={classes.cardHeaderLink}
                  component={Link}
                  to={pageData.subLink.url || ''}
                  variant='body2'>{pageData.subLink.title}</Typography>
              )}
            </>
          )}
        >
        </CardHeader>
        <CardContent className={classes.CardContent}>
          <Grid container spacing={0}>
            {columns.map((column) => (
              <Grid
                key={column.key}
                className={clsx(classes.column, classes[`columnBg${column.background}`])}
                item
                xs={12} md={4}
                component={Link}
                to={column.url}
              >
                <h3 className={classes.columnTitle}>{column.title}</h3>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
