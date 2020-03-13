import React from 'react'
import About from './Content/About'
import Projects from './Content/Projects'
import Education from './Content/Education'
import Skills from './Content/Skills'

const Layout = props => {
	return (
		<div className='layout'>
			{props.children}
			<About />
			<Projects />
			<Skills />
			<Education />
		</div>
	)
}

export default Layout
