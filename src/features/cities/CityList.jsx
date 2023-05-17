import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCities } from './citySlice';

const CityList = () => {
    const cities = useSelector(selectAllCities);

    const formatCity = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const renderedCities = cities.map(city => (
        <li className='list-group-item' key={city.id}>
            {formatCity(city.name)}
        </li>

    ))

    return (
        <section className='mt-3'>
            <h4>Searched Cities</h4>
            <ul className='list-group'>
                {renderedCities}
            </ul>
        </section>

    )
}

export default CityList;