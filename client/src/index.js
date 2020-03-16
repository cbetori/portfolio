import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/header.css'
import './styles/layout.css'
import './styles/footer.css'
import './styles/content.css'
import './styles/content-header.css'
import './styles/button.css'
import './styles/education.css'
import './styles/cover-page.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/about-card.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
