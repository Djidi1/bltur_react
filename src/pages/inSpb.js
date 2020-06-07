import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const InSpb = () => {
  const classes = useStyles();

  const columns = [
    {
      key: 'hotels',
      title: 'Размещение',
    },
    {
      key: 'museum',
      title: 'Экскурсии',
    },
    {
      key: 'taxi',
      title: 'Заказ транспорта',
    },
    {
      key: 'request',
      title: 'Заявка на предварительный расчет тура',
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {columns.map((column) => (
          <Grid item xs={12} md={3}>
            <Paper key={column.key} className={classes.paper}>
              {column.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
