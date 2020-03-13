import React from 'react'
import '../styles/images/linkedin.png'

const Footer = () => {
	return (
		<div id='footer' className='footer'>
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
