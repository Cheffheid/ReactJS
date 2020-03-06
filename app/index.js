import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			theme: 'light',
			toggleTheme: () => {
				this.setState( ( { theme } ) => ( {
					theme: 'light' === theme ? 'dark' : 'light'
				} ) )
			}
		}
	}

	render() {
		return (
			<Router >
				<ThemeProvider value={this.state}>
					<div className={this.state.theme}>
						<div className="container">
							<Nav />
							<Route exact path='/' component={Popular} />
							<Route path='/battle' component={Battle} />
						</div>
					</div>
				</ThemeProvider>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById( 'app' )
);
