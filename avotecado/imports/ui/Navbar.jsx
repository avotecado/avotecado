import React, { Component } from 'react';
//added from material UI for a top nav bar
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//New imports from mui sample Dashboard
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { PolListSideBarItems } from './PolListSideBar';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },

//   hide: {
//     display: 'none',
//   },

//   menuButtonHidden: {
//     display: 'none',
//   },

  title: {
    flexGrow: 1,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));



export default function NavBar() {
	const classes = useStyles();
	//New imports from mui sample Dashboard
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	
	const handleDrawerOpen = () => {
	  setOpen(true);
	};
	const handleDrawerClose = () => {
	  setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
		<CssBaseline />
			<AppBar color="primary" position="fixed" 
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,	
				})}
			>
			
			{/* // New imports from mui sample Dashboard: */}

				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start" 
						color="inherit" 
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
						>
						<MenuIcon />
					</IconButton>
					<TypoGraphy variant="h5" color="inherit">
						avotecado
			   		</TypoGraphy>
				</Toolbar>
			</ AppBar>

			{/* // New imports from mui sample Dashboard: */}

			{/* <Drawer
        		variant="permanent"
        		classes={{
          		paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
      		>
        
			<div className={classes.toolbarIcon}>
          		<IconButton onClick={handleDrawerClose}>
            		<ChevronLeftIcon />
          		</IconButton>
			</div> */}

			<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

			  <Divider />
			<List>{ PolListSideBarItems }</List>
        		<Divider />


			</Drawer>
			<main className={classes.content}>
        	
			<div className={classes.appBarSpacer} />


			</main>
		</div>
	);
}

