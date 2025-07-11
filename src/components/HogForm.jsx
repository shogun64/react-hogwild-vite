import React, { useState } from "react";

function HogForm({addHog}) {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        "highest medal achieved": "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({...formData, [name]: type === "checkbox" ? checked : value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newHog = {...formData};

        addHog(newHog);

        setFormData({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        "highest medal achieved": "",
        image: "",
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required/>
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}/>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}/>
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          name="greased"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}/>
        <label htmlFor="highest medal achieved">Highest Medal Achieved:</label>
        <input
          id="highest medal achieved"
          name="highest medal achieved"
          value={formData["highest medal achieved"]}
          onChange={handleChange}/>
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}/>

      <button type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;