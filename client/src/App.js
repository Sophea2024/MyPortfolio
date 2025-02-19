import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Workexperience from "./components/workexperience";
import Languages from "./components/languages";
import "./styles/navbar.css";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workexperience" element={<Workexperience />} />
        <Route path="/Languages" element={<Languages />} />
      </Routes>
    </Router>
  );
};

export default App;
