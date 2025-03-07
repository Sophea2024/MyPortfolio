import React from "react";
import { useParams } from "react-router-dom";
import Bachen from "./bachen";
import Garten from "./garten";
import Natur from "./nature";

function HobbyDetail() {
  const { id } = useParams(); // Holt die ID aus der URL

  const hobbyPages = {
    0: <Bachen />,
    1: <Garten />,
    2: <Natur />,
  };

  return hobbyPages[id] || <h2>Hobby nicht gefunden</h2>;
}

export default HobbyDetail;
