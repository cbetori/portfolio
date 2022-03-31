import React from 'react'
const Resume = props => {
  let handleResume = () => {
    console.log(API_URL)
    fetch(API_URL + '/api/resume', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(result => window.open(result.resume))
  }

  return (
    <div
      key='default-resume'
      id={props.id}
      className={props.className}
      onClick={() => handleResume()}>
      DOWNLOAD RESUME
    </div>
  )
}

export default Resume
