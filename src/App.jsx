import { useState } from "react";
import axios from "axios";
import "tailwindcss";
import Header from "./Components/Header/Header";
import SearchButton from "./Components/SearchButton/Button";
import "./App.css";
import Card from "./Components/Card/Card";
import TheInput from "./Components/Input/Input";

function Weather() {
  const [userCity, setUserCity] = useState("");
  const [result, setResult] = useState(null);

  async function getWeather(e) {
    e.preventDefault();
    try {
      const API_KEY = "cbdade7bde0366db77e1ff1053ad99d1";

      const cityRef = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=metric`,
      );
      setResult(cityRef.data);
    } catch (err) {
      alert("Something Went Wrong, Please try again later :/");
      console.log(err);
    }
  }
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="form-container">
          <form onSubmit={getWeather}>
            <TheInput
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
            />
            <br />
            <SearchButton />
          </form>
        </div>
        {result && <Card weatherData={result} />}
      </div>
    </>
  );
}

export default Weather;
