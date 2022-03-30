import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './styles/index.css'
import './styles/components/header.css'
import './styles/components/layout.css'
import './styles/components/footer.css'
import './styles/components/content.css'
import './styles/components/button.css'
import './styles/components/body/education.css'
import './styles/components/body/content-header.css'
import './styles/components/body/projects.css'
import './styles/components/body/skills.css'
import './styles/components/body/about.css'

const App = () => {
  return (
    <div
      id='portfolio'
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
