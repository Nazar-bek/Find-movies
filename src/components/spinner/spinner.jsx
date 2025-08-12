import React from 'react'
import "./spinner.scss"
const Spinner = ({width = "50px"}) => {
  return (
    <div className='loader' style={{width}}/>
  )
}

export default Spinner

