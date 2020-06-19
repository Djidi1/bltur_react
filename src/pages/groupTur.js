import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {
  Card, CardContent, CardHeader,
  Typography, Divider,
  List, ListItem, ListItemText,
} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
  turDaysTitle: {
    fontSize: 16,
    fontWeight: "bold",
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

export const GroupTur = () => {
  const classes = useStyles();

  const pageData = {
    key: 'page_to_spb',
    title: 'Прием в Санкт-Петербурге',
    subtitle: 'Для организованных групп',
  };

  const columns = [
    {
      key: 'hotels',
      title: 'Размещение',
      background: 'Green',
      col: 3,
      items: [
        { links: [
            {title: 'Отели ⭐⭐⭐⭐⭐', url: '#'},
            {title: 'Отели ⭐⭐⭐⭐', url: '#'},
            {title: 'Отели ⭐⭐⭐', url: '#'},
            {title: 'Отели ⭐⭐ (тур класс)', url: '#'},
            {title: 'Мини-отели', url: '#'},
            {title: 'Апартаменты', url: '#'},
            {title: 'Хостелы', url: '#'},
          ] },
        {attention: {
            type: 'warning',
            title:'Предложение дня',
            text:'Скидки на размещение в текущий период предоставляют эти отели',
          }},
        {text: 'В Питере огромный выбор отелей на любой вкус и кошелек. Сейчас нет проблемы найти размещение в системах бронирования. Но если Вы решите воспользоваться советом коренных петербуржцев будем рады подсказать где лучше остановиться именно Вам, учитывая Ваши интересы и цели и, при необходимости, забронировать размещение. Мы честно расскажем о всех плюсах и минусах выбранной Вами гостиницы, что позволит избежать неприятных сюрпризов.'}
      ],
    },
    {
      key: 'museum',
      title: 'Экскурсии и музеи',
      background: 'Pink',
      col: 6,
      items: [
        {
          listTurs: [
            {
              days: '1 день',
              turs: [
                { title: 'День в Великом городе', url: '#' },
                { title: '«День в Великом городе» (на транспорте заказчика)', url: '#' }
              ]
            },
            {
              days: '2 дня',
              turs: [
                { title: 'Блистательный Санкт-Петербург', url: '#' },
                { title: '«День в Великом городе» (на транспорте заказчика)', url: '#' }
              ]
            },
            {
              days: '3 дня',
              turs: [
                { title: 'Город над вольной Невой', url: '#' }
              ]
            },
            {
              days: '4 дня',
              turs: [
                { title: 'Гранитный город славы и беды', url: '#' }
              ]
            },
            {
              days: '5 дней',
              turs: [
                { title: 'Страницы истории Дома Романовых', url: '#' }
              ]
            },
          ]
        },
        {attention: {
            type: 'success',
            title: 'Обратите внимание',
            text: 'На сайте ТОЛЬКО стандартные программы. Это далеко не все, что мы можем. В действительности интересных предложений много, и мы готовы отправить их Вам, а так же составить программу специально для Вашей группы с учетом возраста и состава участников Обращайтесь!'
          }}
      ],
    },
    {
      key: 'request',
      background: 'Orange',
      title: 'Заявка на предварительный расчет тура',
      col: 3,
      items: [
        {attention: {
            type: 'info',
            title: 'Уважаемые гости!',
            text: 'Мы рассчитываем тур в ручном режиме. После получения заявки с Вами, в удобное время, свяжется персональный менеджер. Он работает по заявке от ее получения до Вашего отъезда. Всегда на связи, готов решать любые вопросы по тур, отвечает за точное исполнение заказа, за комфортный и интересный визит в наш любимый город.'
          }},
        {subTitle: 'Дополнительные услуги'},
        'Организация обедов, ужинов, банкетов',
        'Экскурсии и прогулки на катерах',
        'Театральные билеты',
        {subTitle: 'Фотосессии'},
        'Скоро будут',
      ],
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
                xs={12} md={column.col || Math.ceil(12 / columns.length)}
              >
                <h3 className={classes.columnTitle}>{column.title}</h3>
                {column.items && column.items.map(item => {
                    if (Object.prototype.toString.call(item) === "[object String]") {
                      return <li>{ item }</li>;
                    } else if (item.links) {
                      return (
                        <List dense component="nav">
                          {item.links.map((link, index) => (<>
                            <ListItem button component="a" href={link.url}>
                              <ListItemText primary={link.title} />
                              <KeyboardArrowRightIcon />
                            </ListItem>
                            { item.links.length > (index + 1) && <Divider component="li" /> }
                          </>))}
                        </List>);
                    } else if (item.listTurs) {
                      return item.listTurs.map((tur) => (
                        <List key={tur.days} dense component="nav">
                          <span className={classes.turDaysTitle}>{ tur.days }</span>
                          { tur.turs.map((link, index) => (<>
                            <ListItem button component="a" href={link.url}>
                              <ListItemText primary={link.title} />
                              <KeyboardArrowRightIcon />
                            </ListItem>
                            { tur.turs.length > (index + 1) && <Divider component="li" /> }
                          </>))}
                        </List>));
                    } else if (item.subTitle) {
                      return <h3 className={classes.columnTitle}>{item.subTitle}</h3>
                    } else if (item.attention) {
                      return (
                        <Alert severity={item.attention.type} className={classes.alert}>
                          <AlertTitle>{item.attention.title}</AlertTitle>
                          {item.attention.text}
                        </Alert>
                      )
                    } else if (item.text) {
                      return <Typography variant='body2'>{item.text}</Typography>
                    }
                    return null;
                  }
                )}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
