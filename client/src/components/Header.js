import React, { useEffect } from 'react'
import Button from './Button'

const Header = () => {
	let handleClick = id => {
		let element = document.getElementById(id).offsetTop
		window.scrollTo({ top: element - 100, behavior: 'smooth' })
	}

	let handleResume = () => {
		fetch('/api/resume', {
			method: 'GET',
			responseType: 'blob',
		}).then(response => {
			const file = new Blob([response.data], { type: 'application/pdf' })
			const fileURL = URL.createObjectURL(file)
			console.log(fileURL)
			window.open(fileURL)
		})
	}

	return (
		<div>
			<div className='header'>
				<Button onClick={e => handleClick('about')} value='About' />
				<Button onClick={e => handleClick('projects')} value='Projects' />
				<Button onClick={e => handleClick('skills')} value='Skill Set' />
				<Button onClick={e => handleClick('education')} value='Education' />
				<Button onClick={e => handleResume()} value='Resume'></Button>
			</div>
		</div>
	)
}

export default Header
