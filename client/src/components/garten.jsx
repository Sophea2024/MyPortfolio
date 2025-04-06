import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./css/bachen.css";
import Tomaten from "../img/garten/Tomaten.png";
import Heidel from "../img/garten/Heidelbeer.png";
import Erdbeer from "../img/garten/Erdbeer.png";
import Longko from "../img/garten/Longkoriender.png";
import Reisfeld from "../img/garten/Reisfeld-Pflanze.png";
import Basilkum from "../img/garten/Basilikum.png";
import Orchid from "../img/garten/Orchidee.png";
import Hyazinthe from "../img/garten/Hyazinthe.png";
import Rose from "../img/garten/rose_1.png";

function Garten() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Button className="zurück-btn" onClick={() => navigate(-1)}>
        Zurück
      </Button>
      <h2>
        Es macht mir Spaß, in meiner Freizeit zu gärtnern!
      </h2>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="kuchen-baken">
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={4} className="d-flex justify-content-center">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Tomatenpflanzen</h4>
                  </Card.Text>
                  <Card.Img src={Tomaten} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Heidelbeeren</h4>
                  </Card.Text>
                  <Card.Img src={Heidel} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Erdbeerpflanzen</h4>
                  </Card.Text>
                  <Card.Img src={Erdbeer} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Langkoriander (Asia-Kräuter)</h4>
                  </Card.Text>
                  <Card.Img src={Longko} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Reisfeldpflanze (Asia-Kräuter)</h4>
                  </Card.Text>
                  <Card.Img src={Reisfeld} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Holy Basil (Indisches Basilikum)</h4>
                  </Card.Text>
                  <Card.Img src={Basilkum} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Orchideen</h4>
                  </Card.Text>
                  <Card.Img src={Orchid} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Hyazinthen</h4>
                  </Card.Text>
                  <Card.Img src={Hyazinthe} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Rosen</h4>
                  </Card.Text>
                  <Card.Img src={Rose} />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Garten;
