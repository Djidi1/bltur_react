import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Grid,
  Card, CardContent, CardHeader,
  Typography, Divider,
  List, ListItem, ListItemText,
} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {AppBreadcrumbs} from "./AppBreadcrumbs";

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

export const MainLayout = ({pageData, columns, location}) => {
  const classes = useStyles();

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
                xs={12} md={column.col || Math.ceil(12 / columns.length)}
              >
                <h3 className={classes.columnTitle}>{column.title}</h3>
                <Grid container>
                  <Grid item xs={12} md={column.attention ? 8 : 12}>
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
                  {column.attention && (
                    <Grid item xs={12} md={4}>
                      <Alert severity={column.attention.type} className={classes.alert}>
                        <AlertTitle>{column.attention.title}</AlertTitle>
                        {column.attention.text}
                      </Alert>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
