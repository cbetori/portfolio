import React, { useEffect } from 'react'
import { setStylesClass } from '../../utilities/utilities'

const Header = props => {
	const stylesContentHeader = {
		fontSize: '26pt',
		fontWeight: 'bold',
		display: 'inline-flex',
		width: '100vw'
	}

	const stylesLeftLine = {
		borderBottom: '3px solid black',
		marginLeft: '3vw',
		marginBottom: '25px',
		width: '10%'
	}

	const stylesRightLine = {
		borderBottom: '3px solid black',
		marginBottom: '15px',
		marginRight: '3vw',
		width: '100%'
	}

	const stylesAboutWrap = {
		paddingTop: '100px',
		width: 'auto'
	}
	useEffect(() => {
		setStylesClass('about-wrapper', stylesAboutWrap)
		setStylesClass('content-header', stylesContentHeader)
		setStylesClass('left-line', stylesLeftLine)
		setStylesClass('right-line', stylesRightLine)
	}, [])

	return (
		<div className='content-header'>
			<div className='left-line' />
			<div className='about-wrapper'>{props.value}</div>
			<div className='right-line' />
		</div>
	)
}

export default Header
