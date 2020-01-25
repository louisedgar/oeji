import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    margin: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function TestCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="main">
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Soal UTBK Saintek Tahun 2019"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            cumque officiis ex deserunt nobis commodi, quaerat vitae, tempora
            eum qui cum id tenetur veritatis quod eaque repellendus ipsum,
            repudiandae numquam!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            A
          </Button>{" "}
        </CardActions>
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            B
          </Button>{" "}
        </CardActions>
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            C
          </Button>{" "}
        </CardActions>
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            D
          </Button>{" "}
        </CardActions>
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            E
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
