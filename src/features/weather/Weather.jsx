import React, { useEffect } from 'react';
import { fetchForcast, selectCityData } from '../cities/citySlice';
import { useDispatch, useSelector } from 'react-redux';

const Weather = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.city.status);
    const data = useSelector(selectCityData);

    let content;

    if (status === 'idle') {
        content = <p>Type in a city</p>
    }

    if (status === 'failed') {
        content = <p>Trouble Loading Data</p>
    }

    if (status === 'succeeded') {
        const forecast = data.forecast.forecastday.map(day => (
            <div key={day.date}>
                <p>{day.date}</p>
                <img src={day.day.condition.icon} />
                <p>{day.day.condition.text}</p>
                <p>Low: {day.day.mintemp_f}</p>
                <p>High: {day.day.maxtemp_f}</p>
            </div>
        ))
        content = (
            <main>
                <h2>Currently in {data.location.name}</h2>
                <img src={data.current.condition.icon}></img>
                <p>Temperature: {data.current.temp_f} F</p>
                <p>Feels Like: {data.current.feelslike_f}</p>
                <h3>Forecast</h3>
                {forecast}
            </main>
        )
    }
    return content
}

export default Weather