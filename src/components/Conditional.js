import {render} from 'react-dom';
import React from 'react';

function Greeting(props) {

	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />
	}
	return <GuestGreeting />;
}

function UserGreeting(props) {
	return <h1>Hello user </h1>;
}

function GuestGreeting(props) {
	// body...
	return <h1> Hello guest, please login </h1>
}


render(<Greeting isLoggedIn={false} />, document.getElementById('child'));


/**
  Preventing components from rendering: return 'null' instead of its render output
**/

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState({
      showWarning: !this.state.showWarning
    });
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export {Page};