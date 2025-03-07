import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./css/bachen.css";
import Berg1 from "../img/natures/Berg_1.png";
import Berg2 from "../img/natures/Berg_2.png";
import Berg3 from "../img/natures/Berg_3.png";
import Flus1 from "../img/natures/Flus_1.png";
import Flus2 from "../img/natures/Flus_2.png";
import Flus3 from "../img/natures/Flus_3.png";
import Blume1 from "../img/natures/Blumen_1.jpg";
import Blume2 from "../img/natures/Blumen_2.png";
import Blume3 from "../img/natures/Blumen_3.png";


function Natur() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
          <Button className="zurück-btn" onClick={() => navigate(-1)}>
            Zurück
          </Button>
          <h2>
            Freizeit in derNatur!
          </h2>
          <Row className="justify-content-center align-items-center">
            <Col md={12} className="kuchen-baken">
              <Card className="mb-4">
                <Row className="no-gutters">
                  <Col md={4} className="d-flex justify-content-center">
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Das Ferd auf dem Berg</h4>
                      </Card.Text>
                      <Card.Img src={Berg1} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Bauenhofmuseum Finsterau</h4>
                      </Card.Text>
                      <Card.Img src={Berg2} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Neroberg</h4>
                      </Card.Text>
                      <Card.Img src={Berg3} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Eltville am Rhein</h4>
                      </Card.Text>
                      <Card.Img src={Flus1} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Elbe</h4>
                      </Card.Text>
                      <Card.Img src={Flus2} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Dresden</h4>
                      </Card.Text>
                      <Card.Img src={Flus3} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Frühling in der Schule</h4>
                      </Card.Text>
                      <Card.Img src={Blume1} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Frühling am Rhein</h4>
                      </Card.Text>
                      <Card.Img src={Blume2} />
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Text className="d-flex justify-content-center">
                        <h4>Bergblume</h4>
                      </Card.Text>
                      <Card.Img src={Blume3} />
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

export default Natur;
