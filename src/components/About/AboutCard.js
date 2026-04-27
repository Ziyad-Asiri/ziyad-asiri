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
        Hi Everyone, I am <span className="purple">ZIYAD MOUSA ASIRI </span>
        from <span className="purple"> Saudi Arabia.</span>
        <br />
        <br />
        I am a Software Engineer passionate about Artificial Intelligence and developing intelligent systems. In my most recent professional role, I managed the digital operations for the Kingdom Tower screen in Riyadh. During this time, I developed an automated data analysis and incident-tracking system that transformed complex technical data into precise reports, significantly accelerating resolution cycles and decision-making.

Today, I focus my expertise on integrating Generative AI with software engineering, using data analysis as a core pillar for building solutions. Whether I am developing applications powered by Large Language Models (LLMs) or managing model lifecycles via MLOps, my goal is always to turn data into smart, secure, and high-impact digital tools.
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
