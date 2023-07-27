import React from "react";
import { useNavigate } from "react-router-dom";

export function PageThree() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => {
            navigate("/Page1");
          }}
        >
          Page One
        </button>
        <button
          onClick={() => {
            navigate("/page2");
          }}
        >
          Page Two
        </button>
      </div>
    </React.Fragment>
  );
}
