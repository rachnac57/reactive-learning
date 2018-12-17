import {Component} from "react";
import {connect} from "react-redux";

import {User} from "./components/User";
import {Math} from "./components/Math";
import {setName} from "./actions/userActions";

class App2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
			<Main changeUserName={(name) => {
				this.props.setName(name)
			}}>
			<User username={this.props.user.name}/>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,	// Reducers from the combineReducers, since they are reponsible for state changes
		math: state.math   // we can access any state properties from these keys via props React obj
	}
};

// Write any actions that u will dispatch from the Components' using this.props.actionName

const mapDispatchToProps = (actions) => {
	return {
		setName: (name) => {
			dispatch(setName(name));
		}

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App2);