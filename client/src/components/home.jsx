import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/home.css";
import myPhoto from "../img/Bew_Sophea-Bild.jpg";


const Home = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="home-section text-center">
      <Row className="align-items-center vh-100">
        <Col>  
          <img src= {myPhoto} alt="Willkommen" className="home-image" />       
          <h1 className="display-3 text-white">
            Willkommen in meinem Portfolio!
          </h1>
          <p className="lead text-white">
            Ich bin Sophea Wiesenfarth-Chan, eine leidenschaftliche
            Softwareentwicklerin.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate("/projects")}
          >
            Meine Projekte ansehen
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
