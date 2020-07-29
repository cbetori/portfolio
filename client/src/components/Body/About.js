import React, { useEffect } from 'react'
import AboutCard from './About/AboutCard'

const About = (props) => {
	useEffect(() => {}, [])

	return (
		<div id='about' className='content-wrapper'>
			<div id='about-background-front' />
			<div id='about-background-back' />
			<AboutCard />
		</div>
	)
}

export default About
