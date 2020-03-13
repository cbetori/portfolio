import React from 'react'

const Header = props => {
	return (
		<div className='content-header'>
			<div className='left-line' />
			<div className='about-wrapper'>{props.value}</div>
			<div className='right-line' />
		</div>
	)
}

export default Header
