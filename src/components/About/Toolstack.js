import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiXampp,
  SiAndroidstudio,
  SiFilezilla,
  SiFigma,
  SiMicrosoftoffice,
  SiPostman,
  SiDocker,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* الأدوات الأصلية التي طلبت الحفاظ عليها */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>

      {/* الأدوات الإضافية لتعزيز الملف التقني */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;