import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

// Styling
const useStyles = makeStyles({
  card: {
    maxWidth: "700px",
    maxHeight: "900px"
  },
  title: {
    backgroundColor: green["A700"],
    color: grey[50],
    paddingLeft: "10%"
  },
  padding: {
    paddingLeft: "10%",
    paddingRight: "10%"
  }
});

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
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.padding}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
          asperiores repellendus repudiandae possimus delectus eaque eligendi
          sint labore pariatur enim cupiditate velit sequi alias, sapiente
          tempore temporibus explicabo reprehenderit excepturi modi? Sunt ad
          ipsam nisi, impedit fugit ipsum accusantium nobis iusto! Veniam
          tenetur inventore consectetur iusto velit itaque nulla nam. Quidem
          voluptatem vel soluta totam iusto minima id assumenda odit recusandae,
          maiores culpa modi illum impedit dolores debitis neque harum dolor
          veniam.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.padding}>
        <Button size="large">A. Pilihan 1</Button>
      </CardActions>
      <Divider />
      <CardActions className={classes.padding}>
        <Button size="large">B. Pilihan 2</Button>
      </CardActions>
      <Divider />
      <CardActions className={classes.padding}>
        <Button size="large">C. Pilihan 3</Button>
      </CardActions>
      <Divider />
      <CardActions className={classes.padding}>
        <Button size="large">D. Pilihan 4</Button>
      </CardActions>
      <Divider />
      <CardActions className={classes.padding}>
        <Button size="large">E. Pilihan 5</Button>
      </CardActions>
    </Card>
  );
}
