import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/3.png"}
              isBlog={false}
              title="Exam Management System"
              description="A secure web platform streamlining exam management across three user roles (Admin, Teacher, Student). Includes automated Excel question-bank import and a fully responsive interface."
              demoLink="https://github.com/Ziyad-Asiri/Exam-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/88.png"}
              isBlog={false}
              title="Saudi Stock Market AI Trading Platform"
              description="An AI-powered platform for predicting Saudi stock trends. Built an end-to-end ML pipeline processing 391K+ price points and developed a custom backtesting engine achieving a 64% win rate and 5.23% return."
              demoLink="https://github.com/Ziyad-Asiri/StockVision_Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/22.png"}
              isBlog={false}
              title="Health Food UI"
              description="A clean and refreshing design interface inspired by a healthy lifestyle. It features natural colors like green and white, with visuals of fresh foods and nutritional elements, emphasizing the importance of balanced nutrition and promoting a sense of vitality and energy."
              demoLink="https://www.figma.com/proto/F4bY585Nw8ahEiSac8NPoq/%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A?node-id=8645-431"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/6.png"}
              isBlog={false}
              title="Brochure"
              description="Graphic Design."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/44.png"}
              isBlog={false}
              title="Managing Expenses UI"
              description="A simple and engaging app design for managing expenses tailored for young students. It features a user-friendly interface with vibrant shades of blue, clear icons, and interactive tools to help students track their spending and learn financial responsibility in a fun and accessible way."
              demoLink="https://www.figma.com/proto/3OYkC36ulRKaGCC126xA2F/%D9%85%D8%B5%D8%B1%D9%88%D9%81?node-id=1-3&t=e6imReYF5UwVORvX-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/Assets/Projects/77.png"}
              isBlog={false}
              title="Dashboard"
              description="An interactive operations dashboard designed for Kingdom Tower's advertising infrastructure. Features 3-tier role-based access control, a maintenance ticket system, and automated data export."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;