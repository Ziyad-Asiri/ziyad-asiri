import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with turning complex data into intelligent applications—and I've built the systems to prove it! 🚀
              <br />
              <br />
              I am highly proficient in core languages like <b className="purple">Python, SQL, and JavaScript</b>, seamlessly bridging the gap between deep data analytics, robust backends, and clean user interfaces.
              <br />
              <br />
              My fields of interest are building innovative <b className="purple">AI-driven technologies</b>, conducting advanced <b className="purple">Exploratory Data Analysis (EDA)</b>, and crafting interactive data-driven products that drive strategic decisions.
              <br />
              <br />
              Whenever possible, I apply my passion for developing scalable solutions and automated reporting tools using modern frameworks like <b className="purple">Streamlit, FastAPI, Power BI</b>, and advanced <b className="purple">Generative AI/LLM toolkits</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={process.env.PUBLIC_URL + "/Assets/avatar.svg"} 
                className="img-fluid" 
                alt="avatar" 
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ziyad-asirii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zeyad29011@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;