import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Public from "@material-ui/icons/Public";
import AccountBox from "@material-ui/icons/AccountBox";
import Backspace from "@material-ui/icons/Backspace";
import MenuBook from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";

// Styling
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

// Stateful Component List Sidebar
export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/dashboard" className={classes.link}>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Public />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/profil" className={classes.link}>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItem>
        </Link>
        <Link to="/soal" className={classes.link}>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary="Daftar Soal" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav">
        <Link to="/landing" className={classes.link}>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <Backspace />
            </ListItemIcon>
            <ListItemText primary="Keluar" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
