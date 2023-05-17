import React from 'react'

const Current = ({ data }) => {
    return (
        <div className='card-body '>
            <h2 className='card-title text-center'>Currently in {data.location.name}</h2>
            <img className='custom__lg-card-img' src={data.current.condition.icon} alt={data.current.condition.text}></img>
            <p className='card-text text-center'>{data.current.condition.text}</p>
            <p className='text-center'>Temperature: {data.current.temp_f} F</p>
            <p className='text-center'>Feels Like: {data.current.feelslike_f}</p>
        </div>
    )
}

export default Current