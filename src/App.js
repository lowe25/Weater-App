import axios from "axios";
import { useEffect,useState } from "react";
import "./App.scss";
function App() {
  const [data, setData] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windmph, setWindmph] = useState('');
  const [windDirec, setWind] = useState('');
  const [pressure, setPressure] = useState('');
  const [sunset, setSunset] = useState('');
  const [sunrise, setsunRise] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json', {
      method: 'GET',
      params: {q: `${data}`},
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'fb85ef442emsh952107db0ac15b5p1c65c8jsn840ce5b7be35'
      }
    })
    .then(function (response){
      console.log(response.data)
      setPressure(response.data.current.pressure_mb);
      setWindmph(response.data.current.wind_mph);
      setWind(response.data.current.wind_dir);
      setHumidity(response.data.current.humidity)
      setCity(response.data.location.name);
      setRegion(response.data.location.region);
      setCountry(response.data.location.country);
      setSunset(response.data.forecast.forecastday[0].astro.sunset);
      setsunRise(response.data.forecast.forecastday[0].astro.sunrise);
    })
    .catch(function (error){
      console.log(error);
    })
  })

  return (
    <div className="App">
      <div className="container">
        <div className="weather-form">
          <form onSubmit={handleSubmit}>
            <div className="btn-con">
              <input
                type="text"
                className="txt-searchCountry"
                placeholder="Search City"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <input
                type="submit"
                className="btn-searchCountry"
                value="Search"
              />
            </div>
          </form>
        </div>

        <div className="con-status">
          <div className="weather-search">
            <h1>Searched City</h1>
            <ul>
              <li>City:{city}</li>
              <li>Region: {region}</li>
              <li>Country: {country}</li>
            </ul>
          </div>

          <div className="weather-stat">
            <h1>Current Conditions</h1>
            <ul>
              <li>Feels Like:</li>
              <li>Humidity: {humidity}</li>
              <li>Wind:{windDirec} {windmph}</li>
              <li>Sunrise: {sunrise}</li>
              <li>Sunset: {sunset}</li>
              <li>Pressure: {pressure}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
