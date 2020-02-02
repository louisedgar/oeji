import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import homeImage from "../assets/home-img.svg";
import Container from "@material-ui/core/Container";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#62a2ff",
      main: "#0074e1",
      dark: "#004aae",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffcf49",
      main: "#f79e02",
      dark: "#be6f00",
      contrastText: "#000"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section id="home-main">
        <Grid
          container
          spacing={3}
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={8} sm={6}>
            <div className={classes.paper}>
              <h1 className="title">Berani Oeji Dirimu?</h1>
              <p className="subtitle">
                Ayo uji kemampuanmu dalam kesiapan
                <br /> menghadapi UTBK dan tingkatkan
                <br /> pengetahuanmu disini!
              </p>
              <MuiThemeProvider theme={theme}>
                <Button size="large" variant="contained" color="primary">
                  Yuk daftar
                </Button>
                <Button size="large" variant="outlined" color="secondary">
                  Masuk
                </Button>
              </MuiThemeProvider>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <div className="home-img">
                <img src={homeImage} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <section id="home-about">
        <h1>Apa itu Oeji?</h1>
        <p>Oeji adalah aplikasi yang menyediakan ribuan soal-soal UTBK</p>
      </section>
      <section id="home-mobile">
        <h1>Android dan iOS</h1>
        <p>
          Oeji kemampuanmu di mana saja dan kapan saja dengan kemudahan akses di
          Android dan iOS mu.
        </p>
      </section>
    </div>
  );
}
