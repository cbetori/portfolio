import React from 'react'
import Content from '../Content'
import Header from '../Content/Header'

const Education = props => {
	return (
		<Content id='education'>
			<Header value='EDUCATION' />
			<div className='education-grid'>
				<div className='edu-detail eds-detail'>
					<div className='edu-title'>Austin Coding Academy</div>
					<div className='edu-date'>September 2018 - May 2019</div>
					<div className='edu-degree'>Full Stack Web Development</div>
				</div>
				<div className='logo aca' />
				<div className='edu-detail aca-detail'>
					<div className='edu-title'>St. Edward University</div>
					<div className='edu-date'>May 2011- August 2015</div>
					<div className='edu-degree'>Bachelors in Business Administration</div>
				</div>
				<div className='logo eds' />
				<div className='class' />
			</div>
		</Content>
	)
}

export default Education
