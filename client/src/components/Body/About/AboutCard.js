import React, { useState, useEffect } from 'react'
import AboutMore from './AboutMore'
import Resume from '../Other/Resume'

const AboutCard = () => {
	const [aboutDetail, aboutDetailSet] = useState()

	let defaultResumeDiv = (
		<Resume key='default-resume' className='about-card-resume' />
	)

	let handleMore = () => {
		if (aboutDetail.key === 'default-resume') {
			aboutDetailSet(<AboutMore revert={() => handleResumeBtn()} />)
		} else {
			aboutDetailSet(defaultResumeDiv)
		}
	}

	let handleResumeBtn = () => {
		return aboutDetailSet(defaultResumeDiv)
	}

	useEffect(() => {
		aboutDetailSet(defaultResumeDiv)
	}, [])

	return (
		<div className='about-card'>
			<div className='about-card-wrapper'>
				<div className='about-card-photo'></div>
				{aboutDetail}
				<div className='about-card-more' onClick={() => handleMore()}>
					about me ->
				</div>
			</div>
		</div>
	)
}

export default AboutCard
