import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import "./Hasil.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import cardImage from "../assets/hasil.png";
import CardMedia from "@material-ui/core/CardMedia";

class Hasil extends Component {
  render() {
    return (
      <Card className="hasil-card">
        {/* <CardMedia image={cardImage} /> */}
        <img src={cardImage}></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Selamat!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Kamu lulus dengan nilai:
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Hasil;
