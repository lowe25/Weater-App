import axios from "axios";
import { useState } from "react";
import "./App.scss";
import img from "./assets/img/default.jpg";
function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windmph, setWindmph] = useState("");
  const [windDirec, setWind] = useState("");
  const [pressure, setPressure] = useState("");
  const [sunset, setSunset] = useState("");
  const [sunrise, setsunRise] = useState("");
  const [fah, setFah] = useState("");
  const [cel, setCel] = useState("");
  const [defIcon, setdefIcon] = useState(img);
  const [localTime, setLocaltime] = useState("");
  //const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (e) => {
    axios
      .get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
        method: "GET",
        params: { q: `${data}` },
        headers: {
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          "X-RapidAPI-Key":
            "fb85ef442emsh952107db0ac15b5p1c65c8jsn840ce5b7be35",
        },
      })
      .then((response) => {
        console.log(response.data);
        setFah(response.data.current.feelslike_f);
        setCel(response.data.current.feelslike_c);
        // setImg(response.data.current.condition.icon);
        setPressure(response.data.current.pressure_mb);
        setWindmph(response.data.current.wind_mph);
        setWind(response.data.current.wind_dir);
        setHumidity(response.data.current.humidity);
        setCity(response.data.location.name);
        setRegion(response.data.location.region);
        setCountry(response.data.location.country);
        console.log(response.data.location.localtime)
        setLocaltime(response.data.location.localtime);
        setSunset(response.data.forecast.forecastday[0].astro.sunset);
        setsunRise(response.data.forecast.forecastday[0].astro.sunrise);
        setData("");
        setdefIcon(response.data.current.condition.icon);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  };

  

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
            <div className="weather">
            <ul>
              <li>City:{city}</li>
              <li>Region: {region}</li>
              <li>Country: {country}</li>
              <li>Local Time and Date: {localTime}</li>
            </ul>
            <img src={defIcon}  className="weather-img" alt="default-icon" />
            </div>
          </div>

          <div className="weather-stat">
            <h1>Current Conditions</h1>
            <div className="temp-div">
              <input
                type="button"
                onClick={() => setIsLoading(true)}
                value="??C"
                className="temps"
              />
              <input
                type="button"
                onClick={() => setIsLoading(false)}
                value="??F"
                className="temps"
              />
            </div>
            <ul>
              <li>
                Feels Like: <b>{isLoading ? fah : cel}</b>
              </li>
              <li>
                Humidity: <b>{humidity}</b>
              </li>
              <li>
                Wind:{" "}
                <b>
                  {windDirec} {windmph}
                </b>
              </li>
              <li>
                Sunrise: <b>{sunrise}</b>
              </li>
              <li>
                Sunset: <b>{sunset}</b>
              </li>
              <li>
                Pressure: <b>{pressure}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      {/**Container */}
    </div> /**App */
  );
}

export default App;
