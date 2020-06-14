import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import AnnouncementTwoToneIcon from '@material-ui/icons/AnnouncementTwoTone';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import ToysTwoToneIcon from '@material-ui/icons/ToysTwoTone';
import FiberNewTwoToneIcon from '@material-ui/icons/FiberNewTwoTone';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import DirectionsBoatTwoToneIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import TurPopover from '../components/TurPopover';

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

const gridOptions = [
  {
    key: 'col_spb',
    title: 'Санкт-Петербург',
    type: 'list',
    options: [
      {
        title: 'Экскурсии по городу',
        description: 'на автобусе и пешком',
        icon: <AccountBalanceTwoToneIcon color="primary"/>,
      },
      {
        title: 'Прием в Петербурге',
        description: 'групп и индивидуальных туристов',
        icon: <LocationCityTwoToneIcon color="primary"/>,
        link: 'прием_в_петербурге',
      },
      {
        title: 'Сегодня в городе',
        description: 'новости с ФонтанкиРу',
        icon: <AnnouncementTwoToneIcon color="primary"/>,
      },
      {
        title: 'Погода в петербурге',
        description: 'Гизметео на неделю',
        icon: <WbSunnyTwoToneIcon color="primary"/>,
      },
    ]
  },
  {
    key: 'col_to_spb',
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
  },
  {
    key: 'col_turs',
    title: 'Ближайшие туры и экскурсии',
    type: 'list',
    options: [
      {
        title: 'На праздники',
        description: '',
        icon: <ToysTwoToneIcon color="primary"/>,
      },
      {
        title: 'Новинки и событийные туры',
        description: '',
        icon: <FiberNewTwoToneIcon color="primary"/>,
      },
      {
        title: 'Детям',
        description: '',
        icon: <ChildCareTwoToneIcon color="primary"/>,
      },
      {
        title: 'Отзывы',
        description: '',
        icon: <ChatTwoToneIcon color="primary"/>,
      },
    ]
  },
];


export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        {
          gridOptions.map((column) => (
            <Grid className={classes.gridRoot} key={column.key} item md={4} xs={12}>
              <Card className={classes.card}>
                <CardHeader
                  className={classes.cardHeader}
                  title={(
                    <>
                      <Typography variant='h5'>{column.title}</Typography>
                      {column.subtitle && (
                        <Typography
                          variant='body2'
                          className={classes.cardHeaderLink}
                          component={Link}
                          to={column.link || ''}
                        >
                          {column.subtitle}
                        </Typography>
                      )}
                    </>
                  )}
                >
                </CardHeader>
                <CardContent>
                  {column.type === 'list' && (
                    <List className={classes.root}>
                      {column.options.map((item, index) => (
                        <React.Fragment key={index}>
                          <ListItem button component={Link} alignItems="flex-start" to={item.link || ''}>
                            <ListItemAvatar>
                              <Avatar className={classes.avatar}>
                                {item.icon}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.title}
                              secondary={item.description}
                            />
                          </ListItem>
                          {(index + 1) < column.options.length && <Divider variant="inset" component="li"/>}
                        </React.Fragment>
                      ))}
                    </List>
                  )}
                  {column.type === 'grid' && (
                    <Grid container spacing={1}>
                      {column.options.map((item) => (
                        <Grid className={classes.grid} key={item.title} item md={4} xs={12}>
                          <TurPopover
                            className={classes.popover}
                            classes={classes}
                            item={item}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}
