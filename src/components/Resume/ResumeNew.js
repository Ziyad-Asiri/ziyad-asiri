import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import * as pdfjsLib from "pdfjs-dist";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const pdfFile = "/Assets/Ziyad.Asiri-CV.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center my-4">
          <Document 
            file={pdfFile} 
            className="d-flex justify-content-center"
            loading={<Spinner animation="border" variant="primary" />}
          >
            <Page 
              pageNumber={1} 
              /* التعديل الجذري هنا:
                 - في اللابتوب (>786px): نثبت العرض على 800px ليكون أنيقاً وفي المنتصف.
                 - في الجوال: نجعله يأخذ عرض الشاشة ناقص 40 بكسل (لترك هامش بسيط)، 
                   وهذا سيجعل الخط كبيراً وواضحاً جداً للقراءة.
              */
              width={width > 786 ? 800 : width - 40} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-lg"
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;