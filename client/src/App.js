import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Workexperience from "./components/workexperience";
import "./styles/navbar.css";

class App extends Component {
  render() {
    return (
      <Router>
        <CustomNavbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workexperience" element={<Workexperience />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
