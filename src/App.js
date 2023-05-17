import Header from './components/Header';
import CityList from './features/cities/CityList';
import Search from './features/cities/SearchForm';
import Weather from './features/weather/Weather';

function App() {
  return (
    <>
      <Header />
      <div className='d-flex'>
        <aside className='m-3 w-25'>
          <Search />
        </aside>
        <Weather />
      </div>
    </>

  );
}

export default App;
