import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import DirectionsBoatTwoToneIcon from "@material-ui/icons/DirectionsBoatTwoTone";
import TurPopover from "../components/TurPopover";

const useStyles = makeStyles(() => ({
  gridRoot: {
    display: 'flex',
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
  avatar: {
    backgroundColor: '#e8eaf6',
  },
  popover: {
    flex: 1,
  },
  button: {
    padding: [8, 4],
    flex: 1,
    '& .MuiButton-startIcon': {
      flex: 1,
      margin: 0,
      marginBottom: 8,
    },
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  grid: {
    display: 'flex',
  }
}));

export const FromSpb = () => {
  const classes = useStyles();

  const pageData = {
    key: 'page_from_spb',
    title: 'из Санкт-Петербурга',
    subtitle: 'выберите направление',
    link: 'из_петербурга',
    type: 'grid',
    options: [
      {title: 'Россия', flag: 'russia', menu: ['Лен. область', 'Москва', 'Золотое кольцо', '...']},
      {title: 'Финляндия', flag: 'finland', menu: ['Хельсинки', 'Иматра', 'Лаппеенранта', '...']},
      {title: 'Эстония', flag: 'estonia', menu: ['Таллин', '...']},
      {title: 'Беларусь', flag: 'belarus', menu: ['Минск', '...']},
      {title: 'Швеция', flag: 'sweden', menu: ['Стокгольм', '...']},
      {title: 'Латвия', flag: 'latvia', menu: ['Рига', '...']},
      {title: 'Грузия', flag: 'georgia', menu: ['Тбилиси', 'Батуми', '...']},
      {title: 'Норвегия', flag: 'norway', menu: ['Осло', '...']},
      {title: 'Литва', flag: 'lithuania', menu: ['Вильнюс', '...']},
      {title: 'Абхазия', flag: 'abkhazia', menu: ['Новый Афон', '...']},
      {title: 'Дания', flag: 'denmark', menu: ['Копенгаген', '...']},
      {title: 'Круизы', icon: <DirectionsBoatTwoToneIcon/>, menu: ['Морские', 'Речные', '...']},
    ]
  };

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
            </>
          )}
        >
        </CardHeader>
        <CardContent>
          <Grid container spacing={1}>
            {pageData.options.map((item) => (
              <Grid className={classes.grid} key={item.title} item md={4} xs={12}>
                <TurPopover
                  className={classes.popover}
                  classes={classes}
                  item={item}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
