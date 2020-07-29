import React from 'react'
import SectionHead from './Other/SectionHead'

const Projects = (props) => {
	const projects = {
		covid: {
			purpose: 'Website providing Covid-19 data. ',
			stack: 'React, React-Virtualized, GoLang',
			link: 'https://sars-cov-2-cb.herokuapp.com/',
		},
		db: {
			purpose:
				'Dashboard website utilizing pre-existing database to develop a cashflow visiualization for investors.',
			stack: 'React, Redux, GoLang',
			link: 'https://aca-dashboard-go.herokuapp.com/',
		},
		pdf: {
			purpose:
				"Electron application that merges all PDF's within a given folder.",
			stack: 'React, GoLang, Electron',
			link: 'https://github.com/cbetori/PDF-Merger',
		},
	}

	return (
		<div id='projects' className='content-wrapper'>
			<SectionHead value='PROJECTS' />
			<div className='content-detail'>
				<div className='project section-wrapper'>
					<div className='project-header project-header-grid'>
						Covid-19 Tracker
					</div>
					<div id='project-covid' className='project-image' />
					<div className='project-detail-wrapper'>
						<div className='project-detail-header'>Summary</div>
						<div className='project-detail'>{projects.covid.purpose}</div>

						<div className='project-detail-header'>Stack</div>
						<div className='project-detail'>{projects.covid.stack}</div>
						<a className='project-detail-header' href={projects.covid.link}>
							Link
						</a>
					</div>
				</div>
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
			</div>
		</div>
	)
}

export default Projects