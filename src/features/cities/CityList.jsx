import { useSelector } from 'react-redux';
import { selectAllCities } from './citySlice';
import City from './City';

const CityList = () => {
    const cities = useSelector(selectAllCities);
    const status = useSelector(state => state.city.status);

    let content;

    const renderedCities = cities.map(city => (
        <li className='list-group-item' key={city.id}>
            <City name={city.name} />
        </li>
    ))

    if (status === 'succeeded') {
        content = (
            <section className='card mt-3 pt-2 p-3'>
                <h4>Searched Cities</h4>
                <ul className='list-group'>
                    {renderedCities}
                </ul>
            </section>
        )
    }

    return content
}

export default CityList;