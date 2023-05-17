import { selectCityData } from '../cities/citySlice';
import { useSelector } from 'react-redux';
import Current from './Current';
import { format } from 'date-fns';

const Weather = () => {
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
            <article key={day.date}>
                <div className='card m-2 border-0'>
                    <div className='card-body'>
                        <p className='card-title text-center border-bottom'>{format(new Date(day.date), 'EEEE')}</p>
                        <img className='custom__sm-card-img' src={day.day.condition.icon} alt={data.current.condition.text} />
                        <p className='card-text text-center'>{day.day.condition.text}</p>
                        <p className='card-text text-center'><strong>Low: </strong> {day.day.mintemp_f}</p>
                        <p className='card-text text-center'><strong>High: </strong> {day.day.maxtemp_f}</p>
                    </div>

                </div>

            </article>
        ))
        content = (
            <main className='d-flex flex-column mt-2'>
                <div className='card '>
                    <Current data={data} />
                    {/* <div className='card-body '>
                        <h2 className='card-title text-center'>Currently in {data.location.name}</h2>
                        <img className='custom__lg-card-img' src={data.current.condition.icon} alt={data.current.condition.text}></img>
                        <p className='card-text text-center'>{data.current.condition.text}</p>
                        <p className='text-center'>Temperature: {data.current.temp_f} F</p>
                        <p className='text-center'>Feels Like: {data.current.feelslike_f}</p>
                    </div> */}
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