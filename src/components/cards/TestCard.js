import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import "./TestCard.css";
class TestCard extends Component {
  render() {
    return (
      <div className="box">
        <Card>
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
          <Divider />
          <CardActions disableSpacing>
            <Button size="large" color="primary">
              A
            </Button>{" "}
          </CardActions>
          <Divider />
          <CardActions disableSpacing>
            <Button size="large" color="primary">
              B
            </Button>{" "}
          </CardActions>
          <Divider />
          <CardActions disableSpacing>
            <Button size="large" color="primary">
              C
            </Button>{" "}
          </CardActions>
          <Divider />
          <CardActions disableSpacing>
            <Button size="large" color="primary">
              D
            </Button>{" "}
          </CardActions>
          <Divider />
          <CardActions disableSpacing>
            <Button size="large" color="primary">
              E
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default TestCard;
