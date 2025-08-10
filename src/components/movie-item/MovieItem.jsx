import React from 'react'
import "./MovieItem.scss"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const MovieItem = ({data, onToggleOpen}) => {
  return (
    <div className='movieitem' onClick={onToggleOpen}>
        <img src={data.image} alt={data.title} />
        <h2>
            {data.title} {data.index + 1 }
        </h2>
        <div className='movieitem-descr'>
            <p>{data.date}</p>
            <div className='dot'/>
            <p>{data.duration}</p>
        </div>
    </div>
  )
}

export default MovieItem;