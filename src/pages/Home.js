import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import homeImage from "../assets/home-img.svg";
import Container from "@material-ui/core/Container";
import "./Home.css";
import Button from "@material-ui/core/Button";
// import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

// const color = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#62a2ff",
//       main: "#0074e1",
//       dark: "#004aae",
//       contrastText: "#fff"
//     },
//     secondary: {
//       light: "#ffcf49",
//       main: "#f79e02",
//       dark: "#be6f00",
//       contrastText: "#000"
//     }
//   }
// });

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      marginLeft: 0
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container className="home">
      <section id="home-main">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid>
            <h1 className="title">Berani Oeji Dirimu?</h1>
            <p className="subtitle">
              Ayo uji kemampuanmu dalam kesiapan
              <br /> menghadapi UTBK dan tingkatkan
              <br /> pengetahuanmu disini.
            </p>
            <div className={classes.root}>
              <Button size="large" variant="contained" color="primary">
                Yuk daftar
              </Button>
              <Button size="large" variant="outlined" color="secondary">
                Masuk
              </Button>
            </div>
          </Grid>
          <Grid className="home-img">
            <img src={homeImage} alt="" />
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
    </Container>
  );
}
