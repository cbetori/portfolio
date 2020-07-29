import React from 'react'
import Button from './Button'

const Header = () => {
	let handleClick = (id) => {
		let element = document.getElementById(id).offsetTop
		window.scrollTo({ top: element - 100, behavior: 'smooth' })
	}

	return (
		<div className='header'>
			<Button onClick={() => handleClick('about')} value='About' />
			<Button onClick={() => handleClick('projects')} value='Projects' />
			<Button onClick={() => handleClick('skills')} value='Skill Set' />
			<Button onClick={() => handleClick('education')} value='Education' />
		</div>
	)
}

export default Header
