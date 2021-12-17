import React from "react";
import { Switch, Route, link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

// Components
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <NavBar />
      </nav>
      <section className="main">Main</section>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default App;
