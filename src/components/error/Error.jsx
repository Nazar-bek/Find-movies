import React from 'react'
import "./error.scss"
import gif from "/error.gif"
const Error = () => {
  return (
    <div className='errormessage'>
        <img src={gif} alt="Error" />
    </div>
  )
}

export default Error