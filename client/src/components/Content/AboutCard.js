import React from 'react'

const AboutCard = props => {
	let handleResume = () => {
		fetch('/api/resume', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				return res.json()
			})
			.then(result => window.open(result.resume))
	}

	return (
		<div className='about-card'>
			<div className='about-card-wrapper'>
				<div className='about-card-photo'></div>
				<div onClick={() => handleResume()} className='about-card-resume'>
					DOWNLOAD RESUME
				</div>
				<div className='about-card-more'> more -></div>
			</div>
		</div>
	)
}

export default AboutCard
