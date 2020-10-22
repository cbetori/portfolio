import React from 'react'
import SectionHead from './Other/SectionHead'

const Projects = (props) => {
	const projects = {
		amazon: {
			purpose: 'Amazon clone website.',
			stack: 'React, AWS',
			link: 'http://cbetori.com.s3-website.us-east-2.amazonaws.com/',
		},
		cleanDrawer: {
			purpose:
				'Android application that automatically categorizes apps by the category they are listed in the Google Play Store. User can also create their own app categories, add or remove apps, and rearrange both apps and categories.',
			stack: 'React Native, React Draggable Lists, Java',
			link: () => handleAPK(),
		},
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

	let handleAPK = () => {
		fetch('/api/apk', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				return res.json()
			})
			.then((result) => window.open(result.apk))
	}

	return (
		<div id='projects' className='content-wrapper'>
			<SectionHead value='PROJECTS' />
			<div className='content-detail'>
				<div className='project section-wrapper'>
					<div className='project-header project-header-grid'>Amazon Clone</div>
					<a
						id='project-amazon'
						className='project-image'
						href={projects.amazon.link}
					/>
					<div className='project-detail-wrapper'>
						<div className='project-detail-header'>Summary</div>
						<div className='project-detail'>{projects.amazon.purpose}</div>
						<div className='project-detail-header'>Stack</div>
						<div className='project-detail'>{projects.amazon.stack}</div>
						<a className='project-detail-header' href={projects.amazon.link}>
							Link
						</a>
					</div>
				</div>

				<div className='project section-wrapper'>
					<div className='project-header project-header-grid'>Clean Drawer</div>
					<div
						id='project-cleandrawer'
						className='project-image'
						onClick={() => {
							projects.cleanDrawer.link()
						}}
					/>
					<div className='project-detail-wrapper'>
						<div className='project-detail-header'>Summary</div>
						<div className='project-detail'>{projects.cleanDrawer.purpose}</div>
						<div className='project-detail-header'>Stack</div>
						<div className='project-detail'>{projects.cleanDrawer.stack}</div>
						<div
							className='project-detail-header project-detail-link'
							onClick={() => {
								projects.cleanDrawer.link()
							}}
						>
							Link
						</div>
					</div>
				</div>
				<div className='project section-wrapper'>
					<div className='project-header project-header-grid'>
						Covid-19 Tracker
					</div>
					<a
						id='project-covid'
						className='project-image'
						href={projects.covid.link}
					/>
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
					<a
						id='project-db'
						className='project-image'
						href={projects.db.link}
					/>
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
					<a
						id='project-pdf'
						className='project-image'
						href={projects.pdf.link}
					/>
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
