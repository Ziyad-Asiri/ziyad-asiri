import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ZIYAD MOUSA ASIRI </span>
            from <span className="purple"> Saudi Arabia.</span>
            <br />
            I am a Software Engineer with a background in software development, technical support, network administration,
and digital advertising operations. I have Knowledge in developing user interfaces, system performance
monitoring, and digital content management. I possess excellent analytical and problem solving skills, with a
commitment to delivering reliable and effective technical solutions.


            
            <br />
            <br />
            
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ziyad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
