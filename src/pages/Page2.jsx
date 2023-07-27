import React from "react";
import { useNavigate } from "react-router-dom";

export function PageTwo() {
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
            navigate("/page3");
          }}
        >
          Page Three
        </button>
      </div>
    </React.Fragment>
  );
}
