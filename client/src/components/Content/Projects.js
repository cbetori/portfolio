import React from 'react'
import Content from '../Content'
import Header from '../Content/Header'

const Projects = props => {
	const projects = {
		db: {
			purpose:
				'Utilize pre-existing database to develop a cashflow visiualization for investors.',
			stack: 'React, Redux, GoLang',
			link: 'https://aca-dashboard-go.herokuapp.com/',
		},
		pdf: {
			purpose: "Simple application to merge all PDF's in a folder.",
			stack: 'React, GoLang, Electron',
			link: 'https://github.com/cbetori/PDF-Merger',
		},
	}

	return (
		<Content id='projects'>
			<Header id value='PROJECTS' />

			<div className='project'>
				<div className='project-header project-header-grid'>
					Investor Dashboard
				</div>
				<div id='project-db' className='project-image' />
				<div className='project-detail-wrapper'>
					<div className='project-detail-header'>Summary</div>
					<div className='project-detail'>{projects.db.purpose}</div>

					<div className='project-detail-header'>Stack</div>
					<div className='project-detail'>{projects.db.stack}</div>
					<a className='project-detail-header' href={projects.db.link}>
						Link
					</a>
				</div>
			</div>
			<div className='project'>
				<div className='project-header project-header-grid'>PDF Merger</div>
				<div id='project-pdf' className='project-image project-image' />
				<div className='project-detail-wrapper'>
					<div className='project-detail-header'>Summary</div>
					<div className='project-detail'>{projects.pdf.purpose}</div>

					<div className='project-detail-header'>Stack</div>
					<div className='project-detail'>{projects.pdf.stack}</div>
					<a
						className='project-detail project-detail-header'
						href={projects.pdf.link}
					>
						Link
					</a>
				</div>
			</div>
		</Content>
	)
}

export default Projects
