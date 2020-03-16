import React from 'react'
import Header from './components/Header'
import CoverPage from './components/CoverPage'
import Layout from './components/Layout'
import Footer from './components/Footer'

const App = () => {
	return (
		<React.Fragment>
			<Header />
			{/* <CoverPage /> */}
			<Layout />
			<Footer />
		</React.Fragment>
	)
}

export default App
