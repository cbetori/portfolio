import React from 'react'

const AboutMore = (props) => {
	return (
		<div className='about-more' onClick={() => props.revert()}>
			<div className='about-more-block'>
				I am a self-driven young professional with a demonstrated history of
				continued education, problem solving, attention to detail, and process
				improvement. Skilled in JavaScript, Node.js, Golang, SQL, NoSQL and VBA.
				Passionate about technology and highly motivated to continuously learn
				and self-improve, showcased by continued education with Austin Coding
				Academy with a focus in Full Stack Web Development in addition to a
				Bachelor of Business Administration in Accounting from St. Edward's
				University.
			</div>
		</div>
	)
}

export default AboutMore
