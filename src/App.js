import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-form">
          <form action="">
            <div className="btn-con">
              <input
                type="text"
                className="txt-searchCountry"
                placeholder="Search City"
                value=""
                onChange=""
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
              <li>City:</li>
              <li>Region:</li>
              <li>Country:</li>
            </ul>
          </div>

          <div className="weather-stat">
            <h1>Current Conditions</h1>
            <ul>
              <li>Feels Like:</li>
              <li>Humidity:</li>
              <li>Wind:</li>
              <li>Sunrise:</li>
              <li>Sunset:</li>
              <li>Pressure:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
