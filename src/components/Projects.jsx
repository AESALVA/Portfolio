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
      <Row className="md-2 py-4">
        <CardGroup className="CardProjects">
          <div className="Card">
            <img src="src\assets\projects1.png" alt="projectOne"></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>JavaSports</h3>
                <p>React App with MongoDB</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="https://java-sports.vercel.app/" target={"_blank"}>Go see it</Nav.Link>
                <Nav.Link href="https://github.com/AESALVA/JavaSports" target={"_blank"}>
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                  Repo
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="Card">
          <img src="src\assets\projects22.png" alt="projectTwo"></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>NetworKKing</h3>
                <p>HTML & CSS & Bootstrap</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="https://networkking.netlify.app/index.html" target={"_blank"}>Go see it</Nav.Link>
                <Nav.Link href="https://github.com/AESALVA/proyecto" target={"_blank"}>
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                  Repo
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="Card">
          <img src="src\assets\projects3.png" alt=""></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>BrunoRepuestos</h3>
                <p>HTML & CSS & Bootstrap</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="https://brunorepuestos.netlify.app/index.html" target={"_blank"}>Go see it</Nav.Link>
                <Nav.Link href="https://github.com/AESALVA/BP_Repuestos/tree/main/BP_REPUESTOS" target={"_blank"}>
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                  Repo
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className="Card">
          <img src="src\assets\projects4.png" alt=""></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>RollingCodeGames</h3>
                <p>HTML & CSS & Bootstrap & Javascript</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="https://rollingcodegames.netlify.app/" target={"_blank"}>Go see it</Nav.Link>
                <Nav.Link href="https://github.com/AESALVA/RollingGames" target={"_blank"}>
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                  Repo
                </Nav.Link>
              </div>
            </div>
          </div>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Projects;
