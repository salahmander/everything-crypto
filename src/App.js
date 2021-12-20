import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

//CSS
import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";

// Containers
import HomePage from "./containers/HomePage/HomePage";
import Exchanges from "./containers/Exchanges/Exchanges";
import News from "./containers/News/News";
import Cryptocurrencies from "./containers/Cryptocurrencies/Cryptocurrencies";
import CryptoDetails from "./containers/CryptoDetails/CryptoDetails";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <NavBar />
      </nav>
      <main className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            <Link to="/">Everything Crypto</Link> <br />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
};

export default App;
