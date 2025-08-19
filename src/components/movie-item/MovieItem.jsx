import React from 'react'
import "./MovieItem.scss"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const MovieItem = ({data, onOpen}) => {
  return (
    <div className='movieitem' onClick={() => onOpen(data.id)}>
        <img src={data.poster_path} alt={data.name} />
        <h2>
            {data.name.length > 20 ? `${data.name.slice(0,20)}...` : data.name} 
        </h2>
        <div className='movieitem-descr'>
          <img className='movieitem-descr_date' src="/date.svg" alt={data.name} />
            <p>{data.release_date}</p>
            <div className='dot'/>
            <p>{data.vote_average.toFixed(1)}</p>
            <img src="/star.svg" alt="" />
        </div>
    </div>
  ) 
}

export default MovieItem;