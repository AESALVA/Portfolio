import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons'
import Nav from "react-bootstrap/Nav";


const Footer = () => {
  return (
    <>
      <div className="Footer mt-auto">
        <div className="ContainerLogo">
          <Nav.Link href="https://aesalva.github.io/portfolio/"><img src="Logo.jpg" alt="logo" /></Nav.Link>
        </div>
        <div className="SocialIcons">
          <div className="Icon"><Nav.Link href="https://www.facebook.com/eduardo.salva.104/" target={"_blank"} className="d-flex"><FontAwesomeIcon icon={faFacebook} /></Nav.Link></div>
          <div className="Icon"><Nav.Link href="https://www.instagram.com/negro______/" target={"_blank"} className="d-flex"><FontAwesomeIcon icon={faInstagram} /></Nav.Link></div>
          <div className="Icon"><Nav.Link href="https://github.com/AESALVA" target={"_blank"} className="d-flex"><FontAwesomeIcon icon={faGithub} /></Nav.Link></div>
          <div className="Icon"><Nav.Link href="https://open.spotify.com/playlist/7k0FcJYfgUb6yObnFa6iBs?si=e6f8c5533a434e96" target={"_blank"} className="d-flex"><FontAwesomeIcon icon={faSpotify} /></Nav.Link></div>
        </div>
        <p>Copyright © 2023 Angel Eduardo Salva</p>
      </div>
    </>
  );
};

export default Footer;
