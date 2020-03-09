import React, { useEffect } from 'react'
import { setStylesClass } from '../utilities/utilities'

const Content = props => {
	const styles = {
		fontSize: '16pt',
		display: 'block',
		minHeight: '100vh',
		height: 'auto'
	}

	useEffect(() => {
		setStylesClass('content', styles)
	}, [])

	return (
		<div id={props.id} className='content'>
			{props.children}
		</div>
	)
}

export default Content
