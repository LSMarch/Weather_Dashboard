import { selectCityData } from '../cities/citySlice';
import { useSelector } from 'react-redux';
import Current from './Current';
import Forecast from './Forecast';

const Weather = () => {
    const status = useSelector(state => state.city.status);
    const data = useSelector(selectCityData);

    let content;

    if (status === 'idle') {
        content = (
            <article className='card  mt-3 pt-2 p-5'>
                <h4 className='card-title'>Search a City</h4>
            </article>
        )
    }

    if (status === 'failed') {
        content = <p>Trouble Loading Data</p>
    }

    if (status === 'succeeded') {
        const forecast = data.forecast.forecastday.map(day => (
            <article key={day.date}>
                <div className='card m-2 border-0'>
                    <Forecast data={day} />
                </div>
            </article>
        ))
        content = (
            <main className='d-flex flex-column mt-3 m-2'>
                <div className='card '>
                    <Current data={data} />
                </div>
                <div className='card mt-4 '>
                    <h3 className='card-title text-center mt-1'>Forecast</h3>
                    <article className='d-flex flex-row'>
                        {forecast}
                    </article>
                </div>

            </main>
        )
    }
    return content
}

export default Weather