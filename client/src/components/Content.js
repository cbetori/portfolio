import React from 'react'

const Content = props => {
	return (
		<div id={props.id} className='content content-detail'>
			{props.children}
		</div>
	)
}

export default Content
