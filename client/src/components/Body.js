import React from 'react'
import About from './Body/About'
import Projects from './Body/Projects'
import Education from './Body/Education'
import Skills from './Body/Skills'

const Body = () => {
	return (
		<div className='body'>
			<About />
			<Projects />
			<Skills />
			<Education />
		</div>
	)
}

export default Body
