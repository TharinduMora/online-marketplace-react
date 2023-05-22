import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{process.env.REACT_APP_BASE_URL}</p>
      </header>
    </div>
  );
}

export default App;
