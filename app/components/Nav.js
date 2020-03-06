import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
	color: 'rgb(187, 46, 31)'
}

export default function Nav() {
	return (
		<ThemeConsumer>
			{ ( { theme, toggleTheme } ) => (
				<nav className='row space-between'>
					<ul className='row nav'>
						<li>
							<NavLink
								to='/'
								exact
								activeStyle={activeStyle}
								className='nav-link'>
									Popular
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/battle'
								className='nav-link'
								activeStyle={activeStyle}>
									Battle
							</NavLink>
						</li>
					</ul>
					<button
						className='btn-clear'
						onClick={ toggleTheme }
					>
						{ 'light' === theme ? 'Dark' : 'Light' }
					</button>
				</nav>
			) }
		</ThemeConsumer>
	)
}
