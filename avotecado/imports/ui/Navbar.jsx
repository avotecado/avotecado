import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		let styling = {
			backgroundColor: 'silver'
		};
		return (
			<div id="navbar">
		        <div id="menu_button">
		            <img src="icons/ic_menu_48px.png" width="36" height="24" />
		        </div>
		        <div id="header_text">
		            avotecado.
		        </div>
		    </div>
		);
	}
}

export default Navbar;
