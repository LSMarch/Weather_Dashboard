import React from 'react';
import { format } from 'date-fns';

const Forecast = ({ data }) => {
    return (
        <div className='card-body'>
            <p className='card-title text-center border-bottom'>{format(new Date(data.date), 'EEEE')}</p>
            <img className='custom__sm-card-img' src={data.day.condition.icon} alt={data.day.condition.text} />
            <p className='card-text text-center'>{data.day.condition.text}</p>
            <p className='card-text text-center'><strong>Low: </strong> {data.day.mintemp_f}</p>
            <p className='card-text text-center'><strong>High: </strong> {data.day.maxtemp_f}</p>
        </div>
    )
}

export default Forecast