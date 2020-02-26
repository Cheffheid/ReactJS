import React from 'react';

function LanguagesNav ({ selected, onUpdateLanguage }) {
	const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className="flex-center">
			{ languages.map( (language) => (
				<li key={language}>
					<button
						className={language === selected ? 'btn-clear nav-link active' : 'btn-clear nav-link' }
						onClick={() => onUpdateLanguage( language )}>
						{language}
					</button>
				</li>
			) ) }
		</ul>
	);
}

export default class Popular extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage( selectedLanguage ) {
		this.setState( {
			selectedLanguage
		} );
	}

	render() {
		const { selectedLanguage } = this.state;

		return (
			<React.Fragment>
				<LanguagesNav
					selected={ selectedLanguage }
					onUpdateLanguage={ this.updateLanguage }
				/>
			</React.Fragment>
		)
	}
}

