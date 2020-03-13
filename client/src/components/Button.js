import React from 'react'

const Button = props => {
	return (
		<div onClick={props.onClick} className={'button ' + props.class}>
			{props.value}
			{props.children}
		</div>
	)
}

export default Button
