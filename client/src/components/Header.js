import React from 'react'
import Button from './Button'

const Header = () => {
  let handleClick = id => {
    let element = document.getElementById(id).offsetTop
    document
      .getElementById('portfolio')
      .scrollTo({ top: element, behavior: 'smooth' })
    window.scrollTo({ top: element - 100, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className='header'>
        <Button onClick={() => handleClick('about')} value='About' />
        <Button onClick={() => handleClick('projects')} value='Projects' />
        <Button onClick={() => handleClick('skills')} value='Skill Set' />
        <Button onClick={() => handleClick('education')} value='Education' />
      </div>
    </div>
  )
}

export default Header
