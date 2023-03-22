import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
      <div className="Footer mt-auto">
        <div className="ContainerLogo">
          <img src="public/Logo.jpg" alt="logo" />
        </div>
        <div className="SocialIcons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faSpotify} />
        </div>
        <p>Copyright © 2023 Angel Eduardo Salva</p>
      </div>
    </>
  );
};

export default Footer;
