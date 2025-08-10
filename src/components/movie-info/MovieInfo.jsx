import React from 'react'
import "./movieinfo.scss"
const MovieInfo = () => {
  return (
    <div className='movieinfo'>
        <img src="/image1.svg" alt="movie" />
        <div className='movieinfo-descr'>
            <h1>Movie Title</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero in vel debitis esse iste, illo ratione accusantium rem autem voluptatem, neque, quisquam doloremque enim voluptate fugiat? Ea hic vel accusamus.
            </p>
        </div>
    </div>
  )
}

export default MovieInfo;