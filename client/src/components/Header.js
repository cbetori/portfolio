import React from 'react'
import Button from './Button'

import { getDocument } from 'pdfjs-dist'

const Header = () => {
	let handleClick = id => {
		let element = document.getElementById(id).offsetTop
		window.scrollTo({ top: element - 100, behavior: 'smooth' })
	}

	let handleResume = () => {
		window.open('/api/resume')
		// fetch('/api/resume', {
		// 	method: 'GET',
		// 	responseType: 'blob',
		// }).then(response => {
		// 	let reader = response.body.getReader()
		// 	let pdfData = reader
		// 		.read()
		// 		.then(res => {
		// 			return Array.from(res.value)
		// 		})
		// 		.then(res => {
		// 			console.log(res)
		// 			var loadingTask = getDocument({ data: res }).then(res => res)
		// 			window.open(loadingTask)
		// 		})
		// console.log(pdfData)

		// getDocument(data).then(res => window.open(res))
		// console.log(data)
		// let data = atob()
		// window.open(getDocument('../styles/resume.pdf'))
		// const reader = response.body.getReader()
		// console.log(reader.read())
		// const file = new Blob([response.body], { type: 'application/pdf' })
		// const fileURL = URL.createObjectURL(file)
		// pdf
		// console.log(fileURL)
		// window.open(fileURL)
		// window.open('../styles/resume.pdf')
		// })
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
