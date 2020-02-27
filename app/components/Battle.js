import React from 'react';
import PropTypes from 'prop-types';
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa';
import Results from './Results';

function Instructions() {
	return (
		<div className='instructions-container'>
			<h2 className='center-text header-lg'>
				Instructions
			</h2>
			<ol className='container-sm grid center-text battle-instructions'>
				<li>
					<h3 className='header-sm'>
						Enter two Github users.
					</h3>
					<FaUserFriends className='bg-light' color='rgb(255,191,116)' size={140} />
				</li>
				<li>
					<h3 className='header-sm'>
						Battle
					</h3>
					<FaFighterJet className='bg-light' color='#727272' size={140} />
				</li>
				<li>
					<h3 className='header-sm'>
						See the winners.
					</h3>
					<FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
				</li>
			</ol>
		</div>
	)
}

class PlayerInput extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			username: ''
		}

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleChange = this.handleChange.bind( this );
	}

	handleSubmit( event ) {
		event.preventDefault();

		this.props.onSubmit( this.state.username );
	}

	handleChange( event ) {
		this.setState( {
			username: event.target.value
		} );
	}

	render() {
		return (
			<form className='column player' onSubmit={ this.handleSubmit }>
				<label htmlFor='username' className='player-label'>
					{ this.props.label }
				</label>
				<div className='row player-inputs'>
					<input
						type='text'
						id='username'
						name='username'
						className='input-light'
						placeholder='Github username'
						autoComplete='off'
						value={ this.state.username }
						onChange={ this.handleChange }
					/>
					<button
						className='btn btn-dark'
						type='submit'
						disabled={ ! this.state.username }
						>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

PlayerInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
}

function PlayerPreview( { username, onReset, label } ) {
	return (
		<div className='column player'>
			<h3 className='player-label'>
				{label}
			</h3>
			<div className='row bg-light'>
				<div className='player-info'>
					<img
						className='avatar-small'
						src={`https://github.com/${username}.png?size=200`}
						alt=''
					/>
					<a href={`https://github.com/${username}`} className='link'>
						{username}
					</a>
				</div>
				<button className='btn-clear flex-center' onClick={onReset}>
					<FaTimesCircle color='rgb(194, 57, 42)' size='26' />
				</button>
			</div>
		</div>
	)
}

export default class Battle extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			playerOne: null,
			playerTwo: null,
			battle: false
		}

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleReset = this.handleReset.bind( this );
	}

	handleSubmit( id, player ) {
		this.setState( {
			[id]: player
		} )
	}

	handleReset( id ) {
		this.setState( {
			[id]: null
		} );
	}

	render() {
		const { playerOne, playerTwo, battle } = this.state;

		if ( true === battle ) {
			return <Results playerOne={playerOne} playerTwo={playerTwo} />
		}

		return (
			<React.Fragment>
				<Instructions />

				<div className='players-container'>
					<h2 className='center-text header-lg'>
						Players
					</h2>
					<div className='row space-around'>
						{null === playerOne
							? <PlayerInput
								label='Player One'
								onSubmit={ ( player ) => this.handleSubmit( 'playerOne', player ) }
							/>
							: <PlayerPreview username={playerOne} label='Player One' onReset={() => this.handleReset( 'playerOne' ) } />
						}

						{null === playerTwo
							? <PlayerInput
								label='Player Two'
								onSubmit={ ( player ) => this.handleSubmit( 'playerTwo', player ) }
							/>
							: <PlayerPreview username={playerTwo} label='Player Two' onReset={() => this.handleReset( 'playerOne' ) } />
						}
					</div>

					{playerOne && playerTwo && (
						<button
							className='btn btn-dark btn-space'
							onClick={ () => this.setState( { battle: true } ) }
						>
							Battle!
						</button>
					)}
				</div>
			</React.Fragment>
		)
	}
}
