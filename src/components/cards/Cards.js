import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

// Styling
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800
  },
  media: {
    height: 0,
    paddingTop: "10%",
    backgroundColor: "blue"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  title: {
    backgroundColor: green["A700"],
    color: grey[50]
  }
}));

// Stateless Component Card Ujian
export default function TestCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.title}
        title="Soal UTBK Saintek Tahun 2018"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Disini tempat soal-soal
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Pilihan A</Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button size="small">Pilihan B</Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button size="small">Pilihan C</Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button size="small">Pilihan D</Button>
      </CardActions>
      <CardActions disableSpacing>
        <Button size="small">Pilihan D</Button>
      </CardActions>
    </Card>
  );
}
