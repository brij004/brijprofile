import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/entry.webpack"; // Required for Next.js or Webpack

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container
        fluid
        className="pt-32 pb-7"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))",
        }}
      >
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Brij_Ratanpara-cv.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
      {/* pdf */}
      <div
        className="flex flex-col items-center justify-center min-h-screen pb-4 pt-4 text-white relative"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))",
        }}
      >
        <Document
          file="/Brij_Ratanpara-cv.pdf" // Your PDF file inside the "public" folder
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        {/* Pagination Controls  */}
        <div className="flex gap-5 mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className={`px-4 py-2 rounded ${
              pageNumber <= 1
                ? "bg-[#6464649a] cursor-not-allowed"
                : "bg-[#623686] hover:bg-[#552e72ec]"
            }`}
          >
            Previous
          </button>

          <p>
            Page {pageNumber} of {numPages}
          </p>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className={`px-4 py-2 rounded ${
              pageNumber >= numPages
                ? "bg-[#6464649a] cursor-not-allowed"
                : "bg-[#623686] hover:bg-[#552e72ec]"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* pdf puri */}

      <Particle />
    </div>
  );
}

export default ResumeNew;
