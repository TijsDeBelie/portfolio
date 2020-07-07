// App.jsx

import React from "react";
import logo from "./logo.svg";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import ProjectPage from "./ProjectPage.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects/:project" component={ProjectPage} />
      </div>
    </BrowserRouter>
  );
}



export default App;
