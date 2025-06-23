import styles from "./Search.module.css";

const API_KEY = "8012610f1f6259d4b9283d8d63e93b7b";

function Search({ dispatch, city }) {
  async function search() {
    if (city.length < 4) return;

    dispatch({ type: "DATA_LOADING" });
    dispatch({ type: "CLOSE_OPEN" });

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

      dispatch({ type: "DATA_ARRIVED", payload: data2 });
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="search"
        value={city}
        placeholder="Search For Your City 🏙️"
        onChange={(e) => dispatch({ type: "QUERY", payload: e.target.value })}
      />
      <button className={styles.btn} onClick={search}>
        Search
      </button>
    </div>
  );
}

export default Search;
