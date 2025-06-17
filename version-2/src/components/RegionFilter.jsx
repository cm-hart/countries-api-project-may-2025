import { useState } from "react";
// import "./RegionFilter.css"; // Optional: for styling

function RegionFilter({ onFilterChange }) {
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];

  function handleChange(e) {
    const region = e.target.value;
    setSelectedRegion(region);
    onFilterChange(region);
  }

  return (
    <div className="region-filter-wrapper">
      <select
        className="region-dropdown"
        value={selectedRegion}
        onChange={handleChange}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionFilter;