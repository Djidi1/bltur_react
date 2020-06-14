import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import { TurCarousel } from "./TurCarousel";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 0,
    margin: '0 -20px',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(8px)',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  grid: {
    padding: 16,
    display: "flex",
  },
  button: {
    flex: 1,
  },
  contacts: {
    display: "flex",
    padding: 16,
    fontSize: "0.75rem",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    textAlign: "end",
  },
  subHeader: {
    background: '#FAFAFA',
  },
  logoWrapper: {
    padding: 8,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  const logoStyle = {
    width: 397,
    height: 75,
    padding: 0,
    background: 'transparent',
  };

  return (
    <div className={classes.header}>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
            <MuiLink
              component={Link}
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              className={classes.toolbarLink}
              to={section.url}
            >
              {section.title}
            </MuiLink>
        ))}
      </Toolbar>
      <Grid className={classes.subHeader} container>
        <Grid className={classes.logoWrapper} item md={6} xs={12}>
          <Image
            style={logoStyle}
            src='/logo.png'
          />
        </Grid>
        <Grid className={classes.contacts} item md={4} xs={7}>
          +7 901 315 06 11, +7 (812) 715 06 11,<br />
          +7 (812) 383 77 73 , +7 981 163 13 64<br />
          СПБ, ул Седова д.13, БЦ «Бастион» оф. 14<br />
        </Grid>
        <Grid className={classes.grid} item md={2} xs={5}>
          <Button className={classes.button} variant="contained" color="primary">
            Мы в контакте
          </Button>
        </Grid>
      </Grid>
      <TurCarousel />
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
