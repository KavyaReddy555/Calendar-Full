import React from "react";
import Calendar from "./components/Calendar/Calendar.js";
import "./App.css";

function App() {
  const givendate = "05/08/2020";

  return (
    <div className="App">
      <div className="MainContent">
        <Calendar date={givendate} />
      </div>
    </div>
  );
}

export default App;
