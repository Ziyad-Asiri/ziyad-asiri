import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython 
} from "react-icons/di";
import { 
  SiHtml5, 
  SiCss3, 
  SiDart, 
  SiPhp, 
  SiMysql, 
  SiFlutter,
  SiFastapi // إضافة FastAPI لقوتها في مشاريع الـ AI مع بايثون
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* 1. اللغات الأساسية (بايثون وجافا سكريبت) */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* 2. أطر العمل (Web & Mobile) */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>

      {/* 3. قواعد البيانات والويب الأساسي */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      {/* 4. التقنيات التخصصية (شبكات ولغات أخرى) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
    </Row>
  );
}

export default Techstack;