import React from 'react'
import Resume from './Body/Other/Resume'

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className='footer'>
        <div className='personal-icon' />
        <div className='quote-wrapper'>
          Learning, practicing, & improving
          <br />
          with every key-stroke
        </div>
        <Resume className='about-card-resume-footer' />
        <div className='footer-icons'>
          <a className='footer-column-list' href='https://github.com/cbetori'>
            <div className='social-media'>
              <div id='github' />
            </div>
          </a>

          <a
            className='footer-column-list'
            href='https://www.linkedin.com/in/collinbetori/'>
            <div className='social-media'>
              <div id='linkedin' />
            </div>
          </a>
          {/* <div className='insta-wrap'> */}
          <a
            className='footer-column-list'
            href='https://www.instagram.com/cbetori/'>
            <div className='social-media'>
              <div id='insta' />
            </div>
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
