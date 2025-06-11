import localData from "../../localData.js";

function Home() {
  console.log(localData[0], "localData");
  return (
    <div className="home-wrapper">
      <div className="cards-wrapper">
        {localData.map((item) => {
          return (
            <div className="country-card">
              <img src={item.flags.png} />
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
