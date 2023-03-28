import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons'
import Nav from "react-bootstrap/Nav";


const Footer = () => {
  return (
    <>
      <div className="Footer mt-auto">
        <div className="ContainerLogo Icon">
          <img src="public/Logo.jpg" alt="logo" />
        </div>
        <div className="SocialIcons">
          <div className="Icon"><Nav.Link className="d-flex"><FontAwesomeIcon icon={faFacebook} /></Nav.Link></div>
          <div className="Icon"><Nav.Link className="d-flex"><FontAwesomeIcon icon={faInstagram} /></Nav.Link></div>
          <div className="Icon"><Nav.Link className="d-flex"><FontAwesomeIcon icon={faGithub} /></Nav.Link></div>
          <div className="Icon"><Nav.Link className="d-flex"><FontAwesomeIcon icon={faSpotify} /></Nav.Link></div>
        </div>
        <p>Copyright © 2023 Angel Eduardo Salva</p>
      </div>
    </>
  );
};

export default Footer;
