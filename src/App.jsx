import { useState } from "react";
import axios from "axios";
import "tailwindcss";
import Header from "./Components/Header/Header";
import SearchButton from "./Components/SearchButton/Button";
import "./App.css";
import TheInput from "./Components/Input/Input";

function App() {
  const [userMeal, setUserMeal] = useState("");
  const [meals, setMeals] = useState([]);

  async function getMeals(e) {
    e.preventDefault();
    try {
      const mealRef = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${userMeal}`,
      );
      setMeals(mealRef.data.meals);
    } catch (err) {
      alert("Something went wrong :/");
      console.log(err);
    }
  }
  return (
    <>
      <Header />
      <form onSubmit={getMeals}>
        <div className="mt-6 ..."></div>
        <br />
        <TheInput
          value={userMeal}
          onChange={(e) => setUserMeal(e.target.value)}
        />
        <br />
        <SearchButton />
      </form>

      <div className="result-card">
        {meals.map((ml) => {
          console.log(ml);
          return (
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={ml.strMealThumb} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{ml.strMeal}</div>
                  <p className="text-gray-700 text-base">
                    {ml.strArea}, {ml.strCategory}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="line-clamp-4">{ml.strInstructions}</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-yellow-500 mr-2 mb-2">
                    {ml.strTags}
                  </span>
                  <br />
                  <div className="flex gap-2">
                    <a
                      href={ml.strSource || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        Recipe Guide
                      </button>
                    </a>
                    <a
                      href={ml.strYoutube || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        Video Tutorial
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
