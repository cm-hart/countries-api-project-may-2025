
function Home({data}) {
  console.log("data", data)

  //  if (!Array.isArray(data)) {
  //   return <p>Loading countries...</p>; // or a spinner
  // }
 
  return (
    <div className="home-wrapper">
      <div className="cards-wrapper">
        {data.map((item, key) => {
          return (
            <div key={key} className="country-card">
              <img src={item.flags.png} alt={`The flag of ${item.name.common}`}/>
              <div className="card-text">
                <h3>{item.name.common}</h3>
                <p><span>Population:</span> {item.population}</p>
                <p><span>Region:</span> {item.region}</p>
                <p><span>Capital:</span> {item.capital}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
