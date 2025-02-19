import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import "../styles/projects.css";
import "./css/AddProject.css";

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sophea2024/MyPortfolio/blob/main/server/data/languages.json"
    )
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.error("Fehler beim Laden:", error));
  }, []);

  

  return (
    <Container className="mt-5">
      <h1>Meine Sprachkenntnisse</h1>
      <p>Hier werden meine Sprachkenntnisse gezeigt.</p>

      {/* Tabellen-Kopfzeile */}
      <Row className="fw-bold border-bottom p-2">
        <Col md={4}>Sprachen</Col>
        <Col md={8}>Niveau</Col>
      </Row>
      

      {/* Projektdaten */}
      {languages.map((language) => (
        <Row key={language.id} className="border-bottom p-2 project-row">
          <Col md={4}>{language.name}</Col>
          <Col md={8}>
            <a href={language.niveau} target="_blank" rel="noopener noreferrer">
              {language.niveau}
            </a>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Languages;
