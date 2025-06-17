import { useState } from "react";

function SavedCountries() {
  const [storage, setStorage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    localStorage.setItem("fullName", formData.fullName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("country", formData.country);
    localStorage.setItem("bio", formData.bio);
    console.log(localStorage, "localStorage");
    setStorage(localStorage);
    // Pull saved values and store them in state
    setStorage({
      fullName: formData.fullName,
      email: formData.email,
      country: formData.country,
      bio: formData.bio,
    });

    setFormData({
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });
  }

  return (
    <div className="form-container">
      <h1>My Profile</h1>
      {storage ? (
         <p>Welcome, {storage.fullName}!</p>
      ) : (
       
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
      )}
    </div>
  );
}

export default SavedCountries;
