import React from 'react'
import SectionHead from './Other/SectionHead'

const Education = (props) => {
	return (
		<div id='education' className='content-wrapper'>
			<SectionHead value='EDUCATION' />
			<div className='content-detail'>
				<div className='education-grid'>
					<div className='edu-detail eds-detail'>
						<div className='edu-title'>Austin Coding Academy</div>
						<div className='edu-detail'>September 2018 - May 2019</div>
						<div className='edu-detail'>Full Stack Web Development</div>
						<a className='edu-detail' href='https://austincodingacademy.com/'>
							https://austincodingacademy.com/
						</a>
					</div>
					<div className='logo aca' />
					<div className='edu-detail aca-detail'>
						<div className='edu-title'>St. Edward's University</div>
						<div className='edu-detail'>August 2011- May 2015</div>
						<div className='edu-detail'>
							Bachelors of Business Administration in Accounting
						</div>

						<a className='edu-detail' href='https://www.stedwards.edu/'>
							https://www.stedwards.edu/
						</a>
					</div>
					<div className='logo eds' />
				</div>
			</div>
		</div>
	)
}

export default Education
