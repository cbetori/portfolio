import React, { useEffect } from 'react'
import Content from './Content'
import About from './Content/About'
import Projects from './Content/Projects'
import { setStylesId } from '../utilities/utilities'

const Layout = props => {
	const styles = {
		background: 'rgb(240,242,245)',
		width: '100vw'
	}

	useEffect(() => {
		setStylesId('layout', styles)
	}, [])

	return (
		<div id='layout'>
			{props.children}

			<About />
			<Projects />

			<Content id='skills'>Skill Set</Content>
			<Content id='education'>Education</Content>
		</div>
	)
}

export default Layout
