import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppTheme from './components/AppTheme';
import { sections } from './helpers/constans'
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomePage } from './pages';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppTheme>
        <>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Балтик Лайнс Тур" sections={sections} />
            <main>
              <Grid container spacing={5} className={classes.mainGrid}>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/корпорат" component={About} />
                  <Route path="/школьная" component={Users} />
                </Switch>
              </Grid>
            </main>
          </Container>
          <Footer title="" description="" />
        </>
      </AppTheme>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
