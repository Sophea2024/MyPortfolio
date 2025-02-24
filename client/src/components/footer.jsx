import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css"; // Falls du eigenes Styling hinzufügen möchtest

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Mein Portfolio | Sophea Wiesenfarth-Cham.</p>
      </div>
    </footer>
  );
};

export default Footer;