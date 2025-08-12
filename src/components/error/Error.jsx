import React from 'react'
import "./error.scss"
import gif from "/error.gif"
const Error = () => {
  return (
    <div >
        <img src={gif} alt="Error" className='errormessage'/>
    </div>
  )
}

export default Error;