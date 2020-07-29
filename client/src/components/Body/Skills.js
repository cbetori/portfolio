import React from 'react'
import SectionHead from './Other/SectionHead'

const Skills = (props) => {
	const skillsJavaScript = [
		'JavaScript',
		'ES6',
		'HTML',
		'CSS',
		'React',
		'React-Router',
		'Redux',
		'BootStrap',
		'Ant Design',
	]

	const skillsNode = [
		'Express.js',
		'Asynchronus Programming',
		'Database Queries',
		'Authentication',
		'Authorization',
		'REST API',
	]

	const skillsGo = ['Gorilla/Mux', 'Hashing', 'SQLX', 'Tokens', 'REST API']

	const skillsSQL = [
		'PostgreSQL',
		'MongoDB',
		'CRUD',
		'Joins',
		'Mathematical Operators',
	]

	const skillsVBA = [
		'User Forms',
		'Custome Functions',
		'Database Integration',
		'Outlook integration',
	]

	const skillsDeploy = ['GitHub', 'Heroku', 'Testing', 'Linux']

	let createDivs = (array) => {
		let skills = array.map((res) => {
			return <div className='skills'>{res}</div>
		})
		return <div className='skill-detail-wrapper'>{skills}</div>
	}

	let createDivs2 = (obj) => {
		let array = []
		for (let element in obj) {
			array.push(<div className='skills'>{obj[element].value}</div>)
		}
		return <div className='skill-detail-wrapper'>{array}</div>
	}

	return (
		<div id='skills' className='content-wrapper'>
			<SectionHead value='SKILL SET' />
			<div className='content-detail'>
				<div id='skills-wrapper'>
					<div id='javascript' className='skills-column'>
						<div className='skills-header'>JAVASCRIPT</div>
						{createDivs(skillsJavaScript)}
						<div id='js-pic' />
					</div>

					<div id='node' className='skills-column'>
						<div className='skills-header'>NODE.JS</div>
						{createDivs(skillsNode)}
						<div id='node-pic' />
					</div>
					<div id='go' className='skills-column'>
						<div className='skills-header'>GOLANG</div>
						{createDivs(skillsGo)}
						<div id='go-pic' />
					</div>
					<div id='sql' className='skills-column'>
						<div className='skills-header'>SQL/NOSQL</div>
						{createDivs(skillsSQL)}

						<div id='sql-pic' />
					</div>
					<div id='vba' className='skills-column'>
						<div className='skills-header'>VBA</div>
						{createDivs(skillsVBA)}
						<div id='vba-pic' />
					</div>
					<div id='deployment' className='skills-column'>
						<div className='skills-header'>DEPLOYMENT</div>
						{createDivs(skillsDeploy)}

						<div id='deploy-pic' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
