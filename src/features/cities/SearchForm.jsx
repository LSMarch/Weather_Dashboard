import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity, fetchWeather } from './citySlice';

const Search = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const onSearch = (event) => {
        event.preventDefault();
        if (city) {
            dispatch(addCity(city));
            dispatch(fetchWeather(city));
        }
        setCity('');
    }

    const onCityChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <section className='container-fluid mt-2'>
            <form className='w-25' onSubmit={onSearch}>
                <div className='input-group'>
                    <input value={city} onChange={onCityChange} type='text' className='form-control'></input>
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </div>
            </form>
        </section>
    )
}

export default Search