import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../styles/about.css";
import Nav from "react-bootstrap/Nav";

const AboutMe = () => {

  const [moreText, setMoreText] = useState('d-none');
  const [seeMore, setSeeMore] = useState('See More');
  const ShowMore = ()=>{
    if (seeMore==='See More') {
      setMoreText('MoreText');
      setSeeMore('See Less');
    } else {
      setMoreText('d-none');
      setSeeMore('See More');
    }
  }
  return (
    <Container id="About" className="AboutContainer">
      <div className="AboutText">
        <h2>About me</h2>
        <p>
          Hi, my name is <strong>Angel Eduardo Salva</strong> and i am a Full
          Stack Web Developer, bilingual native spanish(Argentina), B2
          english(U.S.A) with residence in Argentina. I consider myself a
          resource that add value to projects, someone who are in constant
          learning and with many years of experience in other fields. Recently
          graduated as a full stack web developer, and I continue learning about
          how to improve my skills, always looking for new challenges and
          opportunities. You can view some of my works in Porjects section, or
          if you are interested in my profile, feel free to contact me. ¡thanks
          for stopping by!.
        </p>
        <div className="AboutSkills">
          <div className="Skills">
            <h2>Hard Skills</h2>
            <ul>
              <li>HTML, CSS, JAVASCRIPT</li>
              <li>REACT, VITE, BOOTSTRAP</li>
              <li>GIT, GITHUB, TRELLO</li>
              <li>NODEJS, MONGODB, POSTMAN</li>
            </ul>
          </div>
          <div className="Skills">
            <h2>Soft Skills</h2>
            <ul>
              <li>LEADERSHIP, ADAPTABILITY</li>
              <li>PROBLEM-SOLVING</li>
              <li>TEAM PLAYER, COMMUNICATION</li>
              <li>AGILE METHODOLOGIES, SCRUM</li>
            </ul>
          </div>
        </div>
        <div className="MoreButton">
          <Nav.Link onClick={ShowMore}>{seeMore}</Nav.Link>
        </div>
        <div className={moreText}>
          <h2>Education</h2>
          <ul>
            <li>Colegio Nuestra Sra. de Montserrat - Elementary school </li>
            <li>Inst.Tec.Sal.Lorenzo Massa - High school</li>
            <li>Word, Excel, Power point -  Additional studies</li>
            <li>Rectifier technician: Gasoline and diesel engines</li>
            <li>Rolling Code School graduate - Full Stack Developer</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
