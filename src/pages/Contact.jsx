import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/form-submitted");
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className="container">
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullname" />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        <button onClick={submitForm} className="btn btn-info">
          Submit
        </button>
      </div>
    </>
  );
}
