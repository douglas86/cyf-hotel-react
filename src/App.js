import React from "react";

import "./App.css";

import SearchForm from "./components/Search/Form.jsx";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <div className="container">
        <SearchForm />
      </div>
    </div>
  );
};

export default App;
