
import Header from './components/Header';
import CityList from './features/cities/CityList';
import Search from './features/cities/SearchForm';
import Weather from './features/weather/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <CityList />
      <Weather />
    </div>
  );
}

export default App;
