import React from 'react'

const Current = ({ data }) => {
    return (
        <div className='card-body '>
            <h2 className='card-title text-center'>Currently in <em>{data.location.name}</em></h2>
            <img className='custom__lg-card-img' src={data.current.condition.icon} alt={data.current.condition.text}></img>
            <p className='card-text text-center'>{data.current.condition.text}</p>
            <p className='text-center'><strong>Temperature: </strong>{data.current.temp_f}&deg;F</p>
            <p className='text-center'><strong>Feels Like: </strong>{data.current.feelslike_f}&deg;F</p>
        </div>
    )
}

export default Current