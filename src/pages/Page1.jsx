import React from "react";
import { useNavigate } from "react-router-dom";

export function PageOne() {
  const navigate = useNavigate();

  function gotoPageTwo() {
    navigate("/page2");
  }

  function gotoPageThree() {
    navigate("/page3");
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={gotoPageTwo}>Page Two</button>
        <button onClick={gotoPageThree}>Page Three</button>
      </div>
    </React.Fragment>
  );
}
