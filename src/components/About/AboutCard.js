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
        Software Engineer trained at the SDAIA AI Professionals Bootcamp, with hands-on experience operating the Kingdom
Tower digital screen and maintaining network sites for STCS. Built a Saudi stock market forecasting model with a 64% win
rate in backtesting, and design interactive dashboards that turn raw data into clear, decision-ready insights..
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
