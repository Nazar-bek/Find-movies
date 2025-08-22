import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }}>
        <img src="/error.gif" alt="Error" />
        <h1>Page not Found</h1>
         <button style={{
            marginTop: "20px"
         }} className='btn btn-primary'>
            <Link to="/">
            Home page
            </Link>
         </button>
    </div>
  )
}

export default NotFound