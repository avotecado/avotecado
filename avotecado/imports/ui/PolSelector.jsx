import React, {Component} from 'react';
import PolBar from './PolBar'
import { connect } from 'react-redux';

class PolList extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div id="polSelector">
			{this.props.polList.map((politician, name) => (
				<PolBar key={name} />
			))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { polList: state.politicians}
}
export default connect(mapStateToProps)(PolList);