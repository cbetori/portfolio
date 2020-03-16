import React from 'react'
import Content from '../Content'
import Header from '../Content/Header'

const Skills = props => {
	return (
		<Content id='skills'>
			<Header value='SKILLS' />
			<div id='skills-wrapper'>
				<div id='front-end' className='skills-column'>
					<div id='header-front' className='skills-header'>
						FRONT-END
					</div>
					<div className='skill-detail-wrapper'>
						<div className='skills'>JavaScript</div>
						<div className='skills'>HTML</div>
						<div className='skills'>CSS</div>
						<div className='skills'>React.js</div>
						<div className='skills'>Redux</div>
						<div className='skills'>BootStrap</div>
					</div>
				</div>
				<div id='back-end' className='skills-column'>
					<div id='header-back' className='skills-header'>
						BACK-END
					</div>
					<div className='skill-detail-wrapper'>
						<div className='skills'>GoLang</div>
						<div className='skills'>Node.js</div>
						<div className='skills'>SQL</div>
						<div className='skills'>Postgres</div>
						<div className='skills'>Authentication</div>
						<div className='skills'>Hashing</div>
					</div>
				</div>
				<div id='deployment' className='skills-column'>
					<div id='header-deploy' className='skills-header'>
						DEPLOYMENT
					</div>
					{/* <div id='skills-plus'>+</div>
					<div id='header-data' className='skills-header'>
						DATABASE
					</div> */}
					<div className='skill-detail-wrapper'>
						<div className='skills'>GitHub</div>
						<div className='skills'>Heroku</div>
						<div className='skills'>Testing</div>
					</div>
				</div>
			</div>
		</Content>
	)
}

export default Skills
