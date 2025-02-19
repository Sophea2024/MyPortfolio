import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import "../styles/projects.css";
import "./css/AddProject.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sophea2024/MyPortfolio/main/server/data/projects.json"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Fehler beim Laden:", error));
  }, []);

  return (
    <Container className="mt-5">
      <h1>Meine Projekte</h1>
      <p>Hier werde ich meine Projekte zeigen.</p>
      <div className="button-addProject">
        <button onClick="#">Projekt hinzufügen</button>
      </div>

      {/* Tabellen-Kopfzeile */}
      <Row className="fw-bold border-bottom p-2">
        <Col md={4}>Projektname</Col>
        <Col md={8}>Projekt-Link</Col>
      </Row>
      <Row className="border-bottom p-2">
        <Col md={4}>MyPortfolio</Col>
        <Col md={8}>
          <a href="https://sophea2024.github.io/MyPortfolio">
            https://sophea2024.github.io/MyPortfolio
          </a>
        </Col>
      </Row>

      {/* Projektdaten */}
      {projects.map((project) => (
        <Row key={project.id} className="border-bottom p-2 project-row">
          <Col md={4}>{project.title}</Col>
          <Col md={8}>
            <a href={project.links} target="_blank" rel="noopener noreferrer">
              {project.links}
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Projects;
