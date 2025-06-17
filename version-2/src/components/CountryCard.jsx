import { Link } from "react-router-dom";

function CountryCard({ filteredData }) {
  return (
    <div className="cards-wrapper">
      {filteredData.map((item) => (
        <Link
          to={`/country/${item.name.common}`}
          className="card-link"
          key={item.name.common}
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
                <span>Capital:</span> {item.capital?.[0] || "N/A"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryCard;