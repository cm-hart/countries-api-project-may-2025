import { useState, useEffect } from "react";
import RegionFilter from "../components/RegionFilter.jsx";
import CountryCard from "../components/CountryCard.jsx";

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
      <CountryCard filteredData={filteredData}/>
    </div>
  );
}

export default Home;
