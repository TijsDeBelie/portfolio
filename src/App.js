// App.jsx

import React from "react";
import logo from "./logo.svg";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
