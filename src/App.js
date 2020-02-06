import React from "react";
import "./App.css";
import Report from "./components/report";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h2 className="text-center p-4">Report</h2>
      <Report />
    </div>
  );
}

export default App;
