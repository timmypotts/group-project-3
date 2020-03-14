import React from "react";
import "./style.css";
import logo from "../../logo.svg";

function Header() {
  return (
    <div className="App-header">
      <h2>Connecting the Hungry with Fresh, Healthy, Unused Food</h2>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h5>
        Americans Waste around 133 billion pounds of food per year which amounts
        to 31 percent of our total food supply.
      </h5>
    </div>
  );
}
export default Header;
