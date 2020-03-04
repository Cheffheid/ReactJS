import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function Card( { header, subheader, avatar, href, name, children } ) {
	return (
		<div className='card bg-light'>
			<h2 className='header-lg center-text'>
				{header}
			</h2>
			<img
				className='avatar'
				src={avatar}
				alt=''
			/>
			{subheader && (
			<p className='center-text'>
				{subheader}
			</p>
			) }
			<h3 className='center-text'>
				<a className='link' href={href}>
					{name}
				</a>
			</h3>

			{ children }
		</div>
	)
};

Card.PropTypes = {
	header: PropTypes.string.isRequired,
	subheader: PropTypes.string,
	avatar: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
