export let setStylesId = (id, styles) => {
	const element = document.getElementById(id)
	for (let style in styles) {
		element.style[style] = styles[style]
	}
}

export let setStylesClass = (id, styles) => {
	const element = document.getElementsByClassName(id)
	for (let div in element) {
		for (let style in styles) {
			if (element[div].style !== undefined) {
				element[div].style[style] = styles[style]
			}
		}
	}
}
