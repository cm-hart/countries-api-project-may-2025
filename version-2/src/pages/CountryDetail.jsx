import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetail({ countries }) {
  const countryName = useParams().countryName;
  console.log("countryName", countryName);

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <p>Country not found</p>;
  }

  console.log("country", country);
  return (
    <div className="country-detail-wrapper">
      <div className="details-image-btn-wrapper">
        <Link to="/">&#8592; Back</Link>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className="text-content">
        <h2>{country.name.common}</h2>
        <button>Save</button>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
      </div>
    </div>
  );
}

export default CountryDetail;
