import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {
  Card, CardContent, CardHeader,
  Typography,
} from "@material-ui/core";

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
    textAlign: 'center',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    }
  },
  column: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "left",

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
  alert: {
    margin: '24px 0',
    '& .MuiAlert-icon': {
      position: "absolute",
    },
    '& .MuiAlertTitle-root': {
      textAlign: "center",
    }
  },
}));

export const InSpb = () => {
  const classes = useStyles();

  const pageData = {
    key: 'page_to_spb',
    title: 'Прием в Санкт-Петербурге',
    subtitle: 'Для индивидуальных гостей и мини-групп до 6 человек',
    subLink: {
      title: 'Возможно ВАС заинтересует экскурсионное обслуживание в группе',
      url: '/сборные_группы',
    }
  };

  const columns = [
    {
      key: 'hotels',
      title: 'Размещение',
      background: 'Green',
    },
    {
      key: 'museum',
      title: 'Экскурсии и музеи',
      background: 'Pink',
    },
    {
      key: 'taxi',
      title: 'Заказ транспорта',
      background: 'Blue',
    },
  ];

  return (
    <div className={classes.root}>
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
                xs={12} md={3}
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
