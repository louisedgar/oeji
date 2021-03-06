// import React, { Component } from "react";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Button from "@material-ui/core/Button";
// import { Divider } from "@material-ui/core";
// import "./TestCard.css";
// class TestCard extends Component {
//   render() {
//     return (
//       <div className="box">
//         <Card>
//           <CardHeader
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title="Soal UTBK Saintek Tahun 2019"
//           />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {this.props.cardContent.soal}
//             </Typography>
//           </CardContent>
//           <Divider />
//           <CardActions disableSpacing className="choice">
//             <Button size="large" color="primary" onClick={this.props.onclick}>
//               A. {""} {this.props.cardContent.pilihan.a}
//             </Button>
//           </CardActions>
//           <Divider />
//           <CardActions disableSpacing className="choice">
//             <Button size="large" color="primary">
//               B. {""} {this.props.cardContent.pilihan.b}
//             </Button>
//           </CardActions>
//           <Divider />
//           <CardActions disableSpacing className="choice">
//             <Button size="large" color="primary">
//               C. {""} {this.props.cardContent.pilihan.c}
//             </Button>
//           </CardActions>
//           <Divider />
//           <CardActions disableSpacing className="choice">
//             <Button size="large" color="primary">
//               D. {""} {this.props.cardContent.pilihan.d}
//             </Button>
//           </CardActions>
//           <Divider />
//           <CardActions disableSpacing className="choice">
//             <Button size="large" color="primary">
//               E. {""} {this.props.cardContent.pilihan.e}
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// export default TestCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function TestCard(props) {
  const soal = props.cardContent.soal;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent classname="soal-content">
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Saintek
        </Typography>
        <Typography variant="h5" component="h2">
          SOAL UTBK SAINTEK TAHUN 2018
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {props.cardContent.soal}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="large">A. {props.cardContent.pilihan.a}</Button>
      </CardActions>
      <Divider />
      <CardActions>
        <Button size="large">B. {props.cardContent.pilihan.b}</Button>
      </CardActions>
      <Divider />
      <CardActions>
        <Button size="large">C. {props.cardContent.pilihan.c}</Button>
      </CardActions>
      <Divider />
      <CardActions>
        <Button size="large">D. {props.cardContent.pilihan.d}</Button>
      </CardActions>
      <Divider />
      <CardActions>
        <Button size="large">E. {props.cardContent.pilihan.e}</Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
