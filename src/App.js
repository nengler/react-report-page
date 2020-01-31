import React from "react";
import "./App.css";
import Category from "./components/category";
import SearchField from "./components/searchField";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h2 className="text-center p-4">Report</h2>
      <SearchField />
      <Category />
    </div>
  );
}

export default App;
