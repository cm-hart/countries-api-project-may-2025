import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";
import { useEffect, useState } from "react";
import localData from "../localData.js";


function App() {
  const [apiData, setApiData] = useState([])

  function getCountriesData() {
    fetch(`https://restcountries.com/v3.1/all?fields=name,flags,region,population`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('countries API data', data);
    if (Array.isArray(data) && data.length > 0) {
          setApiData(data);
        } else {
          setApiData(localData);
        }
    // setApiData(data)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  }

  useEffect(() => {
    getCountriesData()
  }, [])


  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-logo">
              Where in the world?
            </Link>
          </li>
          <div className="nav-pages-links-wrapper">
            <li>
              <Link to="/saved-countries">SavedCountries</Link>
            </li>
            {/* <li>
              <Link to="/country-detail">CountryDetail</Link>
            </li> */}
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={apiData}/>} />
        <Route path="/saved-countries" element={<SavedCountries />} />
        <Route path="/country-detail" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
