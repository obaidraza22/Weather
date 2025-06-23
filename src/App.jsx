import Weather from "./Weather";
import Search from "./Search";
import styles from "./App.module.css";
import AppOpen from "./AppOpen";
import Loading from "./Loading";
import { useReducer } from "react";

const initialState = {
  city: "",
  weather: null,
  isData: false,
  isOpen: true,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "QUERY":
      return { ...state, city: action.payload };

    case "DATA_LOADING":
      return { ...state, isLoading: true, isData: false };

    case "CLOSE_OPEN":
      return { ...state, isOpen: false };

    case "DATA_ARRIVED":
      return {
        ...state,
        isLoading: false,
        weather: action.payload,
        isData: true,
        city: "",
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, weather, isData, isOpen, isLoading } = state;

  return (
    <div className={styles.app}>
      <Search dispatch={dispatch} city={city} />
      {isOpen && <AppOpen />}
      {isLoading && <Loading />}
      {isData && <Weather weather={weather} />}
    </div>
  );
}
export default App;
