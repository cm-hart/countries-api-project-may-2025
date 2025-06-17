import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegionFilter from "../components/RegionFilter.jsx";

function Home({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [formData, setFormData] = useState({
    countrySearched: "",
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Sort data once initially (alphabetically by name)
  const sorted = [...data].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  // Filter whenever region or data changes
  useEffect(() => {
  let result = [...sorted];

  if (selectedRegion) {
    result = result.filter((item) => item.region === selectedRegion);
  }

  if (formData.countrySearched.trim() !== "") {
    result = result.filter((item) =>
      item.name.common
        .toLowerCase()
        .includes(formData.countrySearched.toLowerCase())
    );
  }

  setFilteredData(result);
}, [selectedRegion, formData.countrySearched, data]);

  return (
    <div className="home-wrapper">
      <div className="search-filter-wrapper">
        <form>
          <input
          type="text"
          name="countrySearched"
          placeholder="Search"
          value={formData.countrySearched}
          onChange={handleChange}
        />
        </form>
        <RegionFilter onFilterChange={(region) => setSelectedRegion(region)} />
      </div>

      <div className="cards-wrapper">
        {filteredData.map((item, key) => (
          <Link
            to={`/country/${item.name.common}`}
            className="card-link"
            key={key}
          >
            <div className="country-card">
              <img
                src={item.flags.png}
                alt={`The flag of ${item.name.common}`}
              />
              <div className="card-text">
                <h3>{item.name.common}</h3>
                <p>
                  <span>Population:</span> {item.population}
                </p>
                <p>
                  <span>Region:</span> {item.region}
                </p>
                <p>
                  <span>Capital:</span> {item.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
