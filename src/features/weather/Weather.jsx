import { selectCityData } from '../cities/citySlice';
import { useSelector } from 'react-redux';
import Current from './Current';
import Forecast from './Forecast';

const Weather = () => {
    const status = useSelector(state => state.city.status);
    const data = useSelector(selectCityData);

    let content;

    switch (status) {
        case 'idle':
            content = (
                <article className='card  mt-3 pt-2 p-5'>
                    <h4 className='card-title'>Search a City</h4>
                </article>
            )
            break;
        case 'succeeded':
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
            break;
        case 'failed':
            content = <p>Trouble loading data</p>
        default:
            content = <p>Trouble Loading Data</p>
            break;
    }

    return content;
}

export default Weather