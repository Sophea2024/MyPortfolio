import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Courses = () => {
  return (
    <Container className="mt-5">
      <h1>Meine Weiterbildung</h1>
      <p>Hier werde ich meine Weiterbildung zeigen.</p>

      {/* Table Header */}
      <Row
        className="fw-bold bg-secondary border-bottom p-3 justify-content-start text-center"
        style={{ color: "white", marginTop: "20px" }}
      >
        <Col md={3}>
          <div>Kursname</div>
        </Col>
        <Col md={3}>
          <div>Bildungseinrichtung</div>
        </Col>
        <Col md={3}>
          <div>Zeitraum</div>
        </Col>
        <Col md={3}>
          <div>Weitere Informationen</div>
        </Col>
      </Row>

      {/* Table Body */}
      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Intoduction to Statistic for Data Science</div>
        </Col>
        <Col md={3}>
          <div>OpenSAP Online-Programmierkurs</div>
        </Col>
        <Col md={3}>
          <div>10.2019 - 11.2019</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://learning.sap.com/courses/introduction-to-statistics-for-data-science"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenSAP Online-Programmierkurs
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Programmieren mit Snap</div>
        </Col>
        <Col md={3}>
          <div>OpenSAP Online-Programmierkurs</div>
        </Col>
        <Col md={3}>
          <div>07.2019 - 07.2019</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://learning.sap.com/courses/get-coding-with-snap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Coding with Snap
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Basic of Design Testing</div>
        </Col>
        <Col md={3}>
          <div>OpenSAP Online-Programmierkurs</div>
        </Col>
        <Col md={3}>
          <div>05.2019 - 07.2019</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://learning.sap.com/courses/basics-of-design-testing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Basic of Design Testin
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Deutschkurs "C1 kompakt"</div>
        </Col>
        <Col md={3}>
          <div>Volkshochschule Wiesbaden</div>
        </Col>
        <Col md={3}>
          <div>01.2019 - 05.2019</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://www.vhs-wiesbaden.de/kurse/deutsch/kurs/Deutsch-C1-kompakt/D44663"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deutschkurs "C1 kompakt"
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Deutschkurs "B2 kompakt"</div>
        </Col>
        <Col md={3}>
          <div>Volkshochschule Wiesbaden</div>
        </Col>
        <Col md={3}>
          <div>01.2019 - 05.2019</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://www.vhs-wiesbaden.de/kurse/deutsch/kurs/Deutsch-B2-intensiv-am-Abend/D44645"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deutschkurs "B2-intensiv"
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Orientierungskurs "Leben in Deutschland"</div>
        </Col>
        <Col md={3}>
          <div>Volkshochschule Wiesbaden</div>
        </Col>
        <Col md={3}>
          <div>08.2018 - 09.2018</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://www.vhs-wiesbaden.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Volkshochschule Wiesbaden
            </a>
          </div>
        </Col>
      </Row>

      <Row className="border-bottom border-right border-left p-3 text-center">
        <Col md={3}>
          <div>Intensivkurs "Aufbaukurs A2.2-B1.2"</div>
        </Col>
        <Col md={3}>
          <div>Volkshochschule Wiesbaden</div>
        </Col>
        <Col md={3}>
          <div>04.2018 - 08.2018</div>
        </Col>
        <Col md={3}>
          <div>
            <a
              href="https://www.vhs-wiesbaden.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Volkshochschule Wiesbaden
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
