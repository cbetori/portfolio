import React from 'react'
import ReactDOM from 'react-dom'
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
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
