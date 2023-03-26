import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/projects.css";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <Container className="ContainerProjets">
      <h2>Projects</h2>
      <Row className="md-2 p-2">
        <CardGroup className="CardProjects">
          <div className="Card">
            <img src="src\assets\projects1.png" alt=""></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>JavaSports</h3>
                <p>React App with MongoDB</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="">Go see it</Nav.Link>
                <Nav.Link href="">
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                  Repo
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Projects;
