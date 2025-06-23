import { useState } from "react";
import styles from "./Search.module.css";

const API_KEY = "8012610f1f6259d4b9283d8d63e93b7b";

function Search({ setWeather, setIsData }) {
  const [city, setCity] = useState("");

  async function search() {
    if (city.length < 4) return;

    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    const data = await res.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];

      const res2 = await fetch(
        ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      const data2 = await res2.json();
      setWeather(data2);
      setIsData(true);
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search For Your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={styles.btn} onClick={search}>
        Search
      </button>
    </div>
  );
}

export default Search;
