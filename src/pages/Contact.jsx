import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
  });

  const updateFormField = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    navigate("/form-submitted", { state: { formState } });
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className="container">
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={formState.fullname}
            onChange={updateFormField}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={updateFormField}
          />
        </div>
        <button onClick={submitForm} className="btn btn-info">
          Submit
        </button>
      </div>
    </>
  );
}
