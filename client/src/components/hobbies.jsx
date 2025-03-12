import React from "react";
import { useState } from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import "../styles/hobbies.css";
import BK1 from "../img/backen1.png";
import BK2 from "../img/backen2.png";
import Nat1 from "../img/natur1.png";
import { Link } from "react-router-dom";

/*Liste der Hobbies mit Details*/
const hobbies = [
  {
    id: 0,
    title: "Kuchen Backen",
    text: "Meine Freizeit für meine liebe Familie",
    img: BK1,
    extraInfo: "Nach dem backen genießen wir.",
  },
  {
    id: 1,
    title: "Garten und Pflanzen",
    text: "Gemüse, Kräuter und Blumen zu pflanzen macht mir Spaß.",
    img: BK2,
    extraInfo: "Spaß beim Pflanzen, dann geniesen die Augen.",
  },
  {
    id: 2,
    title: "Bewegung im Natur",
    text: "Ein Spaziergang in der Natur ist gesund und macht glücklich.",
    img: Nat1,
    extraInfo: "Das Leben braucht Bewegung.",
  },
];


const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState(0); // Speichert das aktuelle Slide

  return (
    <Container className="hobbies-container">
      <h1 className="hobbies-title">Meine Hobbies</h1>
      <p className="hobbies-subtitle">Ein Überblick über meine Hobbies.</p>

      {/* Carousel */}
      <Carousel
        interval={3000}
        className="hobbies-carousel"
        activeIndex={selectedHobby}
        onSelect={(selectedIndex) => setSelectedHobby(selectedIndex)}
      >
        {hobbies.map((hobby, index) => (
          <Carousel.Item key={hobby.id}>
            <img className="carousel-image" src={hobby.img} alt={hobby.title} />
            <Carousel.Caption>
              <h3>{hobby.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Info-Bereich (Details zum ausgewählten Hobby) */}
      <div className="hobby-info">
        <h2>{hobbies[selectedHobby].title}</h2>
        <p>{hobbies[selectedHobby].text}</p>

        <Link to={`/hobby/${hobbies[selectedHobby].id}`}>
          <Button variant="primary">Mehr erfahren</Button>
        </Link>

        <div className="extra-box">Vielen Danke!</div>
      </div>
    </Container>
  );
};

export default Hobbies;
