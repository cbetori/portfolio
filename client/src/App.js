import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// import CoverPage from './components/CoverPage'

const App = () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', vh + 'px')
	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	})
	console.log(vh)
	return (
		<React.Fragment>
			<Header />
			{/* <CoverPage /> */}
			<Body />
			<Footer />
		</React.Fragment>
	)
}

export default App
