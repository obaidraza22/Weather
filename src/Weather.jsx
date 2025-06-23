import styles from "./Weather.module.css";

function Weather({ weather }) {
  function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className={styles.weather}>
      <div className={styles.mainUp}>
        <div className={styles.left}>
          <h1>{weather.name}</h1>
          <p>{weather.sys.country}</p>
          <h2>{weather.main.temp}°C</h2>
          <h2>Feels Like: {weather.main.feels_like}</h2>
        </div>

        <div className={styles.right}>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      </div>

      <div className={styles.mainDown}>
        <div className={styles.center}>
          <p className={styles.info}>{weather.main.humidity}%</p>
          <p className={styles.info}>{weather.wind.speed} km/h</p>
          <p className={styles.info}>
            Sunrise: {formatTime(weather.sys.sunrise)}
          </p>
          <p className={styles.info}>
            Sunset: {formatTime(weather.sys.sunset)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
