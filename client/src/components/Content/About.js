import React, { useEffect } from 'react'
import { setStylesClass } from '../../utilities/utilities'
import Content from '../Content'
import Header from '../Content/Header'

const About = props => {
	useEffect(() => {}, [])

	return (
		<Content id='about'>
			<Header value='ABOUT' />
		</Content>
	)
}

export default About
