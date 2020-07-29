import React from 'react'

const SectionHead = props => {
	return (
		<div className='content-header'>
			{/* <div className='left-line' /> */}
			<div className='about-wrapper'>{props.value}</div>
			{/* <div className='right-line' /> */}
		</div>
	)
}

export default SectionHead
