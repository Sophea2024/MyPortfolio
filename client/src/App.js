import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Workexperience from "./components/workexperience";
import Languages from "./components/languages";
import "./styles/navbar.css";
import "./App.css";
import Ausbildung from "./components/educations";
import Courses from "./components/couses";
import Footer from "./components/footer";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
      <div className={`d-flex flex-column min-vh-100 ${isHome ? "home-container" : ""}`}>
        <CustomNavbar />
        <main className={`flex-grow-1 ${isHome ? "d-flex align-items-center justify-content-center" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workexperience" element={<Workexperience />} />
            <Route path="/educations" element={<Ausbildung />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/Languages" element={<Languages />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
