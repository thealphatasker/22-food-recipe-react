import "./Card.css";

function Card({ weatherData }) {
  const temp = Math.round(weatherData.main.temp);
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const humidity = Math.round(weatherData.main.humidity);

  return (
    <div className="card">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span>
          {city},
          <br />
          {country}
        </span>
        <span>Humidity: {humidity}</span>
      </div>

      <span className="temp">{temp}°</span>

      <div className="temp-scale">
        <span>Celsius</span>
      </div>
    </div>
  );
}

export default Card;
