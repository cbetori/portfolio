import React, { useEffect } from 'react'
import Content from '../Content'
import Header from '../Content/Header'
import AboutCard from './AboutCard'

const About = props => {
	useEffect(() => {}, [])

	return (
		<Content id='about'>
			{/* <Header value='ABOUT' /> */}
			<AboutCard />
		</Content>
	)
}

export default About
