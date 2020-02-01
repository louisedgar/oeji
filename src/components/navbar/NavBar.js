// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Public from "@material-ui/icons/Public";
// import AccountBox from "@material-ui/icons/AccountBox";
// import Backspace from "@material-ui/icons/Backspace";
// import MenuBook from "@material-ui/icons/MenuBook";
// import { Link } from "react-router-dom";
// import deepPurple from "@material-ui/core/colors/deepPurple";

// // styling material-ui template
// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0
//     }
//   },
//   appBar: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//       backgroundColor: deepPurple[500]
//     }
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none"
//     }
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   },
//   link: {
//     textDecoration: "none",
//     color: "inherit"
//   }
// }));

// // navbar props
// export default function NavBar(props) {
//   const { container } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         <Link to="/dashboard" className={classes.link}>
//           <ListItem
//             button
//             selected={selectedIndex === 0}
//             onClick={event => handleListItemClick(event, 0)}
//           >
//             <ListItemIcon>
//               <Public fontSize="small" />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//         </Link>
//         <Link to="/profil" className={classes.link}>
//           <ListItem
//             button
//             selected={selectedIndex === 1}
//             onClick={event => handleListItemClick(event, 1)}
//           >
//             <ListItemIcon>
//               <AccountBox fontSize="small" />
//             </ListItemIcon>
//             <ListItemText primary="Profil" />
//           </ListItem>
//         </Link>
//         <Link to="/soal" className={classes.link}>
//           <ListItem
//             button
//             selected={selectedIndex === 2}
//             onClick={event => handleListItemClick(event, 2)}
//           >
//             <ListItemIcon>
//               <MenuBook fontSize="small" />
//             </ListItemIcon>
//             <ListItemText primary="Daftar Soal" />
//           </ListItem>
//         </Link>
//       </List>
//       <Divider />
//       <List component="nav">
//         <Link to="/" className={classes.link}>
//           <ListItem
//             button
//             selected={selectedIndex === 3}
//             onClick={event => handleListItemClick(event, 3)}
//           >
//             <ListItemIcon>
//               <Backspace fontSize="small" />
//             </ListItemIcon>
//             <ListItemText primary="Keluar" />
//           </ListItem>
//         </Link>
//       </List>
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="mailbox folders">
//         <Hidden smUp implementation="css">
//           <Drawer
//             container={container}
//             variant="temporary"
//             anchor={theme.direction === "rtl" ? "right" : "left"}
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             ModalProps={{
//               keepMounted: true
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>
//       <main className={classes.content}></main>
//     </div>
//   );
// }

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Oeji
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
