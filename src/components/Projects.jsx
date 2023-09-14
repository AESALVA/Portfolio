import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/projects.css";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub } from "@fortawesome/free-brands-svg-icons";
import  projects1  from '../assets/projects1.png';
import projects2 from '../assets/projects22.png';
import projects3 from '../assets/projects3.png';
import projects4 from '../assets/projects4.png';
import projects5 from '../assets/projects5.png';
const Projects = () => {
  return (
    <Container id="Projects" className="ContainerProjets">
      <h2>Projects</h2>
      <Row className="md-2 py-4">
        <CardGroup className="CardProjects">
          <div className="Card">
            <img src={projects1} alt="projectOne"></img>
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
          <img src={projects2} alt="projectTwo"></img>
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
          <img src={projects3} alt=""></img>
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
          <img src={projects4} alt=""></img>
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
          <div className="Card">
          <img src={projects5} alt=""></img>
            <div className="CardBody">
              <div className="CardText">
                <h3>BabyShower Candelaria</h3>
                <p>React & NodeJs</p>
              </div>
              <div className="CardButtons">
                <Nav.Link href="https://aesalva.github.io/babyShowerCande/" target={"_blank"}>Go see it</Nav.Link>
                <Nav.Link href="https://github.com/AESALVA/babyShowerCande" target={"_blank"}>
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
