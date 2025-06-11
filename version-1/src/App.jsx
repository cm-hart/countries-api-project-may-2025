import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/saved-countries" element={<SavedCountries />} />
        <Route path="/country-detail" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
