import { format } from 'date-fns';

const Forecast = ({ data }) => {
    // converting given date string to day of the week
    const formatDate = (date) => {
        return format(new Date(date), 'EEEE');
    }

    return (
        <div className='card-body'>
            <p className='card-title text-center border-bottom'>{formatDate(data.date)}</p>
            <img className='custom__sm-card-img' src={data.day.condition.icon} alt={data.day.condition.text} />
            <p className='card-text text-center'>{data.day.condition.text}</p>
            <p className='card-text text-center'><strong>Low: </strong> {data.day.mintemp_f}&deg;F</p>
            <p className='card-text text-center'><strong>High: </strong> {data.day.maxtemp_f}&deg;F</p>
        </div>
    )
}

export default Forecast