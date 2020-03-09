import React, { useEffect } from 'react'
import { setStylesClass } from '../utilities/utilities'

const Button = props => {
	const styles = {
		fontFamily: 'Raleway, sans-serif',
		display: 'inline-flex',
		margin: 'auto',
		fontSize: '18pt',
		cursor: 'default'
	}

	useEffect(() => {
		setStylesClass('button', styles)
	}, [])

	return (
		<div onClick={props.onClick} className='button'>
			{props.value}
		</div>
	)
}

export default Button
