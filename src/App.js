import Header from './components/Header';
import CityList from './features/cities/CityList';
import Search from './features/cities/SearchForm';
import Weather from './features/weather/Weather';

function App() {
  return (
    <div >
      <img
        className='bg-img'
        src='https://news.uga.edu/wp-content/uploads/2022/12/Weather-radar.jpg'
      />
      <div className='bg-content'>
        <Header />
        <div className='d-flex justify-content-evenly '>
          <CityList />
          <Weather />
        </div>
      </div>



    </div>

  );
}

export default App;