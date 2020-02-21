import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>Hello World!</h1>
			</React.Fragment>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById( 'app' )
);
