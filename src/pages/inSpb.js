import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {isString} from "next/dist/build/webpack/plugins/jsconfig-paths-plugin";
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
  };

  const columns = [
    {
      key: 'hotels',
      title: 'Размещение',
      background: 'Green',
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
      items: [
        'обзорные и тематические экскурсии по городу на транспорте',
        'не утомительные прогулки по городу',
        'прогулки и экскурсии для семей с детьми',
        'посещение музеев и заповедников Петербурга',
        {subTitle: 'Наши гиды-экскурсоводы'},
        'талантливые',
        'доброжелательные и внимательные ',
        'имеют городскую аккредитацию',
        'всегда готовы рассказать о городе так, что будет интересно и настоящему знатоку истории, и ребенку, даже когда они слушают гида вместе',
        'очень любят наш город и свою работу',
        {attention: {
          type: 'info',
          title: 'Это интересно',
          text: 'В Питере так много всего интересного, включая сам город, что даже жителям бывает нелегко сориентироваться. Будем рады помочь составить программу с учетом непосредственно Ваших предпочтений. Мы знаем Петербург – значит вероятность «не успеть» или «поздно узнать», меньше ОБРАЩАЙТЕСЬ!'
          }}
      ],
    },
    {
      key: 'taxi',
      title: 'Заказ транспорта',
      background: 'Blue',
      items: [
        'Легковая машина представительского класса',
        'Легковая машина',
        'Минивен до 6 мест',
        'Микроавтобусы разного класса',
        {subTitle: 'Транспортные услуги'},
        'встреча аэропорт/вокзал',
        'транспортное обслуживание по экскурсионной программе',
        'трансферы по городу и пригородам',
        {attention: {
            type: 'success',
            title: 'Обрати внимание',
            text: 'При заказе учитывается время подачи машины. Бывает экономнее заказать такси. Рады подсказать надежную компанию.'
          }}
      ],
    },
    {
      key: 'request',
      background: 'Orange',
      title: 'Заявка на предварительный расчет тура',
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
                {column.items && column.items.map(item => {
                  if (isString(item)) {
                    return <li>{ item }</li>;
                  } else if (item.links) {
                    return (
                      <List component="nav">
                        {item.links.map((link, index) => (<>
                          <ListItem button component="a" href={link.url}>
                            <ListItemText primary={link.title} />
                            <KeyboardArrowRightIcon />
                          </ListItem>
                          { item.links.length > (index + 1) && <Divider component="li" /> }
                        </>))}
                      </List>);
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
