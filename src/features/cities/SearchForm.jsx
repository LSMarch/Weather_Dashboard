import { useState } from 'react';
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
        <section className='d-flex flex-column m-2'>
            <form onSubmit={onSearch}>
                <div className='input-group'>
                    <input
                        placeholder='Enter City or Zipcode'
                        value={city}
                        onChange={onCityChange}
                        type='text'
                        className='form-control'
                    />
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </div>
            </form>
        </section>
    )
}

export default Search