import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import news from "../../Assets/Projects/news.jpg";
import iworkonlinejob from "../../Assets/Projects/iworkonlinejob.jpg";
import luckcharm from "../../Assets/Projects/luckcharm.jpeg";
import movie from "../../Assets/Projects/movie.avif";

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
              imgPath={news}
              isBlog={false}
              title="News Monkey"
              description="Get daily News:-
              Crafted a single‐page application with React.js to facilitate the sharing of development .
              Implemented static site generation for a load times and increased efficiency."
              ghLink="*"
              demoLink="*"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iworkonlinejob}
              isBlog={false}
              title="iworkonlinejob"
              description="iworkonlinejob.info:- is an online platform that rewards users for completing simple tasks, such as surveys and oflers. As part of this project, I was responsible for [describe your specific contributions].
Participated in an online rewards platform to complete various tasks, surveys, and offers, gaining a deep understanding of online marketing, user engagement, and data analysis.
Managed personal performance metrics, optimizing completion strategies to maximize earnings while adhering to platform guidelines and quality standards
Developed proficiency in using various tools, trackers, and analytics platforms to monitor progress, identify opportunities, and improve task completion efficiency.
Enhanced digital literacy by exploring diverse online business models, earning strategies, and customer engagement techniques."
              ghLink="*"
              demoLink="*"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luckcharm}
              isBlog={false}
              title="Luck Charm Sweep "
              description="Developed an interactive card game using React, allowing users to play
              the traditional Seep game online with a modern user interface.
              Developed and maintained core features for an online betting platform, enabling users to bet on sports, casino games, and live events..
              Integrated secure payment gateways (e.g., Bitcoin, PayPal) to facilitate deposits and withdrawals.
              Enhanced platform security by integrating measures for fraud detection and user data encryption.
              Worked on [specific features or technologies you contributed to, like live streaming, odds calculation algorithms, etc.].
              [Other details about your role, like collaboration with"
              ghLink="*"
              demoLink="*"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie For You"
              description="Get all movie details
            :- Developed a movie similar to many movie site facilitating resources haring and Engaging in lively conversations with friends employing React.js technologie."
              ghLink="*"
              demoLink="*"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
