import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ 
        textAlign: "left", // تغيير من justify إلى left لحل مشكلة المسافات
        lineHeight: "1.6"  // إضافة تباعد بسيط بين الأسطر لراحة العين
      }}>
        Hi Everyone, I am <span className="purple">ZIYAD ASIRI </span>
        from <span className="purple"> Saudi Arabia.</span>
        <br />
        <br />
        Software Engineer with hands-on experience across software development, AI, and technical operations. I enjoy building practical solutions, working with data, and solving real-world technical challenges — from developing intelligent applications to supporting large-scale digital systems.
 </p>

      {/* <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
    "Strive to build things that make a difference!"{" "}
  </p> 
*/}
      <footer className="blockquote-footer">Ziyad</footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
