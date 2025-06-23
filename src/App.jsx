import Weather from "./Weather";
import Search from "./Search";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const [isData, setIsData] = useState(false);

  return (
    <div className={styles.app}>
      <Search setWeather={setWeather} setIsData={setIsData} />
      {isData && <Weather weather={weather} />}
    </div>
  );
}
export default App;
