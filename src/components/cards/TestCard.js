// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import Button from "@material-ui/core/Button";
// import green from "@material-ui/core/colors/green";
// import grey from "@material-ui/core/colors/grey";

// // Styling
// const useStyles = makeStyles({
//   card: {
//     maxWidth: "700px",
//     maxHeight: "900px"
//   },
//   title: {
//     backgroundColor: green["A700"],
//     color: grey[50],
//     paddingLeft: "10%"
//   },
//   padding: {
//     paddingLeft: "10%",
//     paddingRight: "10%"
//   },
//   container: {
//     marginLeft: "50%"
//   }
// });

// // Stateless Component Card Ujian
// export default function TestCard() {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <Card className={classes.card}>
//         <CardHeader
//           className={classes.title}
//           title="Soal UTBK Saintek Tahun 2018"
//         />
//         <CardContent>
//           <Typography
//             variant="body2"
//             color="textSecondary"
//             component="p"
//             className={classes.padding}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
//             asperiores repellendus repudiandae possimus delectus eaque eligendi
//             sint labore pariatur enim cupiditate velit sequi alias, sapiente
//             tempore temporibus explicabo reprehenderit excepturi modi? Sunt ad
//             ipsam nisi, impedit fugit ipsum accusantium nobis iusto! Veniam
//             tenetur inventore consectetur iusto velit itaque nulla nam. Quidem
//             voluptatem vel soluta totam iusto minima id assumenda odit
//             recusandae, maiores culpa modi illum impedit dolores debitis neque
//             harum dolor veniam.
//           </Typography>
//         </CardContent>
//         <Divider />
//         <CardActions className={classes.padding}>
//           <Button size="large">A. Pilihan 1</Button>
//         </CardActions>
//         <Divider />
//         <CardActions className={classes.padding}>
//           <Button size="large">B. Pilihan 2</Button>
//         </CardActions>
//         <Divider />
//         <CardActions className={classes.padding}>
//           <Button size="large">C. Pilihan 3</Button>
//         </CardActions>
//         <Divider />
//         <CardActions className={classes.padding}>
//           <Button size="large">D. Pilihan 4</Button>
//         </CardActions>
//         <Divider />
//         <CardActions className={classes.padding}>
//           <Button size="large">E. Pilihan 5</Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}