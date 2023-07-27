import React from "react";
import { useLocation } from "react-router-dom";

export function FormSubmitted() {
  const location = useLocation();
  let fullname = location.state.formState.fullname;
  let email = location.state.formState.email;

  return (
    <>
      <h2>We DGAF about your feedback.</h2>
      <p>I know who you are: {fullname}</p>
      <p>I know where to contact you: {email}</p>
    </>
  );
}
