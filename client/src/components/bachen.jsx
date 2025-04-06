import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./css/bachen.css";
import SchwK from "../img/cakes/schw_k1.jpg";
import SchwD from "../img/cakes/schwedische_t.jpg";
import Marien from "../img/cakes/marien_kaefer.jpg";
import KaeseK from "../img/cakes/CheesCake.png";
import MoonC from "../img/cakes/MoonCake.png";
import Plaetz from "../img/cakes/plätzchen.png";
import HimJT from "../img/cakes/him_joghurt_t1.jpg";
import HimQT from "../img/cakes/him_quark_t1.jpg";
import WeißwT from "../img/cakes/weiß_k1.jpg";

function Bachen() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Button className="zurück-btn" onClick={() => navigate(-1)}>
        Zurück
      </Button>
      <h2>
        Es macht mir Spaß, in meiner Freizeit zu backen!
      </h2>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="kuchen-baken">
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={4} className="d-flex justify-content-center">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Schwarzwälder Kirschtorte</h4>
                  </Card.Text>
                  <Card.Img src={SchwK} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Schwedische Prinzessin</h4>
                  </Card.Text>
                  <Card.Img src={SchwD} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Marienkäfer Kuchen</h4>
                  </Card.Text>
                  <Card.Img src={Marien} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Mandarinen-Käse Kuchen</h4>
                  </Card.Text>
                  <Card.Img src={KaeseK} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Mond Kuchen</h4>
                  </Card.Text>
                  <Card.Img src={MoonC} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Himbeer Joghurt Torte</h4>
                  </Card.Text>
                  <Card.Img src={HimJT} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Himbeer Quark Torte</h4>
                  </Card.Text>
                  <Card.Img src={HimQT} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Weißwälder Torte</h4>
                  </Card.Text>
                  <Card.Img src={WeißwT} />
                </Card.Body>
              </Col>
              <Col md={4}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Text className="d-flex justify-content-center">
                    <h4>Weihnachtsplätzchen</h4>
                  </Card.Text>
                  <Card.Img src={Plaetz} />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Bachen;
