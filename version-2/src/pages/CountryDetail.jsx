import { useParams, Link } from "react-router-dom";

function CountryDetail({ countries, saveFunction, savedCountries }) {
  //dynamic routes params
  const countryName = useParams().countryName;

  //matches the param from the route to the object in the array
  const country = countries.find(
    (item) => item.name.common.toLowerCase() === countryName.toLowerCase()
  );
  //checks to see if the country has been saved before
  const isSaved = savedCountries?.some(
  (item) => item.name.common === country.name.common
);
  
  //error handling
  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className="country-detail-wrapper">
      <div className="details-image-btn-wrapper">
        <Link to="/">&#8592; Back</Link>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className="text-content">
        <h2>{country.name.common}</h2>
        {isSaved ? (
          <button disabled>Saved</button>
        ) : (
          <button onClick={() => saveFunction(country)}>Save</button>
        )}
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
      </div>
    </div>
  );
}

export default CountryDetail;
