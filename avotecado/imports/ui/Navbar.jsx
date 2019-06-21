import React, { Component } from 'react';
//added from material UI for a top nav bar
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function NavBar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar color="primary" position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<TypoGraphy variant="h5" color="inherit">
						avotecado
			   </TypoGraphy>
				</Toolbar>
			</ AppBar>
		</div>
	);
}

// class Navbar extends Component {
// 	render() {
// 		let styling = {
// 			backgroundColor: 'silver'
// 		};
// 		return (
// 			<div id="navbar">
// 		        <div id="menu_button">
// 		            <img src="icons/ic_menu_48px.png" width="36" height="24" />
// 		        </div>
// 		        <div id="header_text">
// 		            avotecado.
// 		        </div>
// 		    </div>
// 		);
// 	}
// }

// export default Navbar;
