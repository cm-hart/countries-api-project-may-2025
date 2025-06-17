import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

function SavedCountries({ savedCountries }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  const [profileSaved, setProfileSaved] = useState(false);

  // ✅ Load profile info from localStorage on first load
  useEffect(() => {
    const fullName = localStorage.getItem("fullName");
    const email = localStorage.getItem("email");
    const country = localStorage.getItem("country");
    const bio = localStorage.getItem("bio");

    if (fullName && email && country && bio) {
      setProfileSaved(true);
      setFormData({ fullName, email, country, bio });
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("fullName", formData.fullName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("country", formData.country);
    localStorage.setItem("bio", formData.bio);

    setProfileSaved(true);
  }

  return (
    <div className="form-container">
      <h2>My Saved Countries</h2>
      <br />
      <h2>My Profile</h2>

      {profileSaved ? (
        <div>
          <p>Welcome, {formData.fullName}!</p>
          <CountryCard filteredData={savedCountries} />
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SavedCountries;
