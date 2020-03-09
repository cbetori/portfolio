import React, { useEffect } from 'react'
import { setStylesClass } from '../utilities/utilities'
import '../styles/images/linkedin.png'

const Footer = () => {
	const stylesFooter = {
		background: 'rgb(68,72,87)',
		fontSize: '14pt',
		color: 'whitesmoke',
		display: 'flex',
		height: 'auto'
		// justifyContent: 'flex-end'
	}

	const stylesColumn = {
		margin: '35px',
		marginRight: '50px',
		width: '200px'
	}

	const stylesColumnLarge = {
		width: '100%',
		maxWidth: '1000px'
	}

	const stylesColumnHead = {
		fontSize: '16pt',
		fontWeight: 'bold',
		marginBottom: '10px',
		borderBottom: '.5px solid whitesmoke'
	}

	const stylesColumnList = {
		display: 'block',
		marginTop: '5px',
		paddingLeft: '15px',
		color: 'whitesmoke',
		textDecoration: 'none'
	}

	const stylesSocial = {
		display: 'flex'
	}

	useEffect(() => {
		setStylesClass('footer', stylesFooter)
		setStylesClass('footer-column', stylesColumn)
		setStylesClass('footer-column-head', stylesColumnHead)
		setStylesClass('footer-column-list', stylesColumnList)
		setStylesClass('social-media', stylesSocial)
		setStylesClass('footer-column-large', stylesColumnLarge)
	}, [])

	return (
		<div className='footer'>
			<div className='footer-column footer-column-large'>
				<div className='footer-column-head'>Summary</div>
				<div className='footer-column-list'>
					A consolidation of my technical skills and practice projects.
				</div>
			</div>
			<div className='footer-column'>
				<div className='footer-column-head'>Contact</div>
				<div className='footer-column-list'>Collin Betori</div>
				<div className='footer-column-list'>440-812-7906</div>
				<div className='footer-column-list'>cbetori@gmail.com</div>
			</div>
			<div className='footer-column'>
				<div className='footer-column-head'>Links</div>
				<a className='footer-column-list' href='https://github.com/cbetori'>
					<div className='social-media'>
						<div id='github' />
						<div>Github</div>
					</div>
				</a>

				<a
					className='footer-column-list'
					href='https://www.linkedin.com/in/collinbetori/'
				>
					<div className='social-media'>
						<div id='linkedin' />
						<div>LinkedIn</div>
					</div>
				</a>
				<a
					className='footer-column-list'
					href='https://www.instagram.com/cbetori/'
				>
					<div className='social-media'>
						<div id='insta' />
						<div>Instagram</div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Footer
