import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCities } from './citySlice';
import City from './City';

const CityList = () => {

    const cities = useSelector(selectAllCities);

    const renderedCities = cities.map(city => (
        <li className='list-group-item' key={city.id}>
            <City city={city} />
        </li>

    ))

    return (
        <section className='w-25 mt-3'>
            <h4>Searched Cities</h4>
            <ul className='list-group'>
                {renderedCities}
            </ul>
        </section>

    )
}

export default CityList;