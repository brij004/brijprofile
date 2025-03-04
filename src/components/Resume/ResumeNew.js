import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/entry.webpack";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log("Total Pages:", numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
      console.log("Previous Page:", pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
      console.log("Next Page:", pageNumber + 1);
    }
  };

  return (
    <div className="bg-gradient-to-bl from-[#11101094] to-[#0c0818e6] min-h-screen text-white">
      {/* Download Section */}
      <Container fluid className="pt-24 pb-7">
        <Particle />
        <Row className="flex justify-center relative">
          <Button
            variant="primary"
            href="/Brij_Ratanpara-cv.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>
      </Container>

      {/* PDF Viewer */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pb-4 pt-4">
        <Document
          file="/Brij_Ratanpara-cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width > 768 ? 600 : width - 40}
          />
        </Document>

        {/* Pagination Controls */}
        <div className="flex items-center gap-5 mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={goToPreviousPage}
            className={`px-4 py-2 rounded transition relative ${
              pageNumber <= 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-700 hover:bg-purple-600"
            }`}
          >
            Previous
          </button>

          <p className="text-lg">
            Page {pageNumber} of {numPages || "Loading..."}
          </p>

          <button
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}
            className={`px-4 py-2 rounded transition relative ${
              pageNumber >= numPages
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-700 hover:bg-purple-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      <Particle />
    </div>
  );
}

export default ResumeNew;
