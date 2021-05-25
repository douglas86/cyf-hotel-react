import React from "react";

import "./App.css";

import Search from "./components/Search.jsx";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <div className="container">
        <Search />
      </div>
    </div>
  );
};

export default App;
