import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: 15,
  });

  const [error, setError] = useState({
    fullnameError: "",
    emailError: "",
    ageError: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newError = {};

    if (formData.fullname.length == 0) {
      newError.fullnameError = "Fullname is Required";
    }
    if (formData.email.length === 0) {
      newError.emailError = "Email is Required";
    }
    if (formData.age == null) {
      newError.ageError = "Age is Required";
    }

    setError(newError);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <p>{error.fullnameError && error.fullnameError}</p>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{error.emailError && error.emailError}</p>
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min={0}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
