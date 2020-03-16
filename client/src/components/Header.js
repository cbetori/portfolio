import React from 'react'
import Button from './Button'

const Header = () => {
	let handleClick = id => {
		let element = document.getElementById(id).offsetTop
		window.scrollTo({ top: element - 100, behavior: 'smooth' })
	}

	let handleResume = () => {
		fetch('/api/resume', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				return res.json()
			})
			.then(result => window.open(result.resume))
	}

	return (
		<div>
			<div className='header'>
				<Button onClick={() => handleClick('about')} value='About' />
				<Button onClick={() => handleClick('projects')} value='Projects' />
				<Button onClick={() => handleClick('skills')} value='Skill Set' />
				<Button onClick={() => handleClick('education')} value='Education' />
				<Button onClick={() => handleResume()} value='Resume'></Button>
			</div>
		</div>
	)
}

export default Header
