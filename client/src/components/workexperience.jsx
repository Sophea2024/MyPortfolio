import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./css/workexperience.css";
import IWR from "../img/IWR.png";
import NIE from "../img/nie.png";
import RUPP from "../img/rupp.png";
import RUPPRO from "../img/rupp_2.png";

const Workexperience = () => {
  return (
    <Container className="mt-5">
      <h1>Meine Beruflische Erfahrung</h1>
      <p>Hier werde ich meine bisherigen Arbeiten zeigen.</p>

      {/* Add-Cards-1 */}
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col md={12}>
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    Wissenschaftliche Hilfskraft – Teilzeit
                  </Card.Title>
                  <Card.Text>
                    Von Oktober 2011 bis April 2014 habe ich als
                    Wissenschaftliche Hilfskraft am Interdisciplinary
                    Center for Scientific Computing (IWR) gearbeitet.
                  </Card.Text>
                  <Card.Link
                    href="https://web.iwr.uni-heidelberg.de/"
                    target="_blank"
                  >
                    Mehr erfahren über IWR
                  </Card.Link>
                </Card.Body>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <Card.Img src={IWR} className="card-img" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Add-Cards-2 */}
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col md={12}>
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={4} className="d-flex justify-content-center">
                <Card.Img src={NIE} className="card-img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Informatik Dozentin</Card.Title>
                  <Card.Text>
                    Von Oktober 2007 bis August 2009 habe ich als Dozentin am National Institute of Education
                    (NIE) gearbeitet.
                  </Card.Text>
                  <Card.Link href="http://www.nie.edu.kh/en/" target="_blank">
                    Mehr erfahren über NIE
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Add-Cards-3 */}
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col md={12}>
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    Assistentin für das Master Programm im Bereich "Pädagogik"–
                    Teilzeit
                  </Card.Title>
                  <Card.Text>
                    Von Oktober 2006 bis April 2008 habe ich als Assistentin im
                    Master-Programm für Pädagogik (MEd) an der Royal
                    University of Phnom Penh gearbeitet.
                  </Card.Text>
                  <Card.Link
                    href="https://www.rupp.edu.kh/graduate/education"
                    target="_blank"
                  >
                    Mehr erfahren über MEd
                  </Card.Link>
                </Card.Body>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <Card.Img src={RUPP} className="card-img" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Add-Cards-4 */}
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col md={12}>
          <Card className="mb-4">
            <Row className="no-gutters">
              <Col md={4} className="d-flex justify-content-center">
                <Card.Img src={RUPPRO} className="card-img" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>
                    Computertechnische Assistentin im Forschungsbüro
                  </Card.Title>
                  <Card.Text>
                    Von September 2005 bis September 2006 war ich als
                    Computertechnische Assistentin im Forschungsbüro der Royal
                    University of Phnom Penh (RUPP) tätig.
                  </Card.Text>
                  <Card.Link
                    href="https://rupp.edu.kh/offices/ro/"
                    target="_blank"
                  >
                    Mehr erfahren über Forschungsbüro der Royal University of
                    Phnom Penh
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Workexperience;
