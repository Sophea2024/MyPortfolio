import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/educations.css";
import UniHd from "../img/hd.png";
import NIE from "../img/nie_logo.jpg";
import RUPP from "../img/rupp_logo.png";
import HS from "../img/hs.jpg";

const Ausbildung = () => {
  return (
    <Container className="mt-5">
      <h1>Meine Ausbildung</h1>
      <p>Hier finden Sie einen Überblick über meine Ausbildungen.</p>

      <Row className="weiterbildung">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-2">
              {/* Bild auf der linken Seite */}
              <Col
                md={3}
                className="d-flex flex-column align-items-center"
                style={{ paddingLeft: "20px" }}
              >
                <h3 className="fw-bold text-dark-blue text-center">GFN</h3>
                <p
                  className="mt-1 text-center text-muted"
                  style={{ color: "darkblue" }}
                >
                  Gemeinsam weiterbilden
                </p>
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    JavaScript Entwicklerin
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Von April 2024 bis Juli 2024 habe ich eine Weiterbildung zur
                    JavaScript Entwicklerin abgeschlossen und ein entsprechendes
                    Zertifikat vom Webmasters Europe e.V. (WE) erhalten.
                  </Card.Text>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>Mehr erfahren über</span>
                    <Card.Link href="https://www.gfn.de/" target="_blank">
                      GFN
                    </Card.Link>
                    <span>und</span>
                    <Card.Link
                      href="https://de.webmasters-europe.org/"
                      target="_blank"
                    >
                      WE
                    </Card.Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-3">
              {/* Bild + Beschreibung darunter */}
              <Col
                md={3}
                className="d-flex flex-column align-items-center"
                style={{ paddingLeft: "50px" }}
              >
                <h3 className="fw-bold text-dark-blue text-center">GFN</h3>
                <p
                  className="mt-1 text-center text-muted"
                  style={{ color: "darkblue" }}
                >
                  Gemeinsam weiterbilden
                </p>
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    PHP & MySQL Entwicklerin
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Von Januar 2024 bis April 2024 habe ich eine Weiterbildung
                    zur PHP- und MySQL-Entwicklerin abgeschlossen und ein
                    entsprechendes Zertifikat vom Webmasters Europe e.V. (WE)
                    erhalten.
                  </Card.Text>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>Mehr erfahren über</span>
                    <Card.Link href="https://www.gfn.de/" target="_blank">
                      GFN
                    </Card.Link>
                    <span>und</span>
                    <Card.Link
                      href="https://de.webmasters-europe.org/"
                      target="_blank"
                    >
                      WE
                    </Card.Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="master justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-1">
              {/* Bild + Beschreibung darunter */}
              <Col md={3} className="d-flex flex-column align-items-center">
                <Card.Img
                  src={UniHd}
                  className="card-img img-fluid rounded-circle"
                  alt="PHP & MySQL"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                    marginLeft: "50px",
                  }}
                />
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    Master der Informatik
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Von Oktober 2009 bis Januar 2018 habe ich mein Masterstudium der Informatik an der Ruprecht-Karls-Universität
                    Heidelberg absolviert.
                  </Card.Text>
                  Mehr erfahren über{" "}
                  <Card.Link
                    href="https://www.uni-heidelberg.de/de/universitaet"
                    target="_blank"
                  >
                    Uni-Heidelberg
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="bachelor">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-2">
              {/* Bild auf der linken Seite */}
              <Col md={3} className="d-flex flex-column align-items-center">
                <Card.Img
                  src={NIE}
                  className="card-img img-fluid rounded-circle"
                  alt="PHP & MySQL"
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "contain",
                    marginLeft: "50px",
                  }}
                />
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    Teacher with Higher Education Degree
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Von Oktober 2006 bis September 2007 habe ich mein Studium der Informatik am National Institute of Education (NIE) absolviert. NIE ist ein Institut der Pädagogischen Hochschule.
                  </Card.Text>
                  Mehr erfahren über{" "}
                  <Card.Link href="http://www.nie.edu.kh/en/" target="_blank">
                    NIE
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-3">
              {/* Bild + Beschreibung darunter */}
              <Col md={3} className="d-flex flex-column align-items-center">
                <Card.Img
                  src={RUPP}
                  className="card-img img-fluid rounded-circle"
                  alt="PHP & MySQL"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    marginLeft: "50px",
                  }}
                />
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    Bachelor der Informatik
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Von November 2001 bis Mai 2005 habe ich mein Bachelorstudium der Informatik an der Royal University of Phnom Penh absolviert.
                  </Card.Text>
                  Mehr erfahren über{" "}
                  <Card.Link href="https://rupp.edu.kh/" target="_blank">
                    RUPP
                  </Card.Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className=" justify-content-center">
        <Col md={6} className="d-flex justify-content-center">
          <Card className="mb-4 w-100 shadow-lg">
            <Row className="no-gutters align-items-center gap-1">
              {/* Bild + Beschreibung darunter */}
              <Col md={3} className="d-flex flex-column align-items-center">
                <Card.Img
                  src={HS}
                  className="card-img img-fluid rounded-circle"
                  alt="High School"
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                    marginLeft: "50px",
                    borderRadius: "50%"
                  }}
                />
              </Col>

              {/* Text auf der rechten Seite */}
              <Col md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold text-primary">
                    High School
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Im Oktober 2001 habe ich meine Schulausbildung an der Battambang High School abgeschlossen.
                  </Card.Text>                  
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ausbildung;
