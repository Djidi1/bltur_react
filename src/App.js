import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppTheme from './components/AppTheme';
import { sections } from './helpers/constans'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { routes } from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";



const useStyles = makeStyles((theme) => ({
  root: {
    background: 'url(/images/balticsea.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  mainGrid: {
    padding: 0,
    margin: '0 -20px',
    borderRadius: 4,
    backdropFilter: 'blur(8px)',
    marginTop: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();


  return (
    <Router>
      <AppTheme>
        <div className={classes.root}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Балтик Лайнс Тур" sections={sections} />
            <main>
              <Grid container spacing={5} className={classes.mainGrid}>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  {routes.map((route) => (
                    <Route exact={route.exact} path={route.path} component={route.component} />
                  ))}
                </Switch>
              </Grid>
            </main>
          </Container>
          <Footer title="" description="" />
        </div>
      </AppTheme>
    </Router>
  );
}
