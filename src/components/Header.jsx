import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderPic">
        <div className="CristalCard">
          <div className="CristalCardContainer">
            <div className="TextProfileBack">
              <div className="TextProfile">
              <div className="ContainerPicture">
                  <img
                    src="src/assets/eduardoprofile.png"
                    alt="profilepicture"
                  />
                </div>
                <div className="Text">
                <h2>My name is Eduardo Salva</h2>
                <h3>and i'm Web Full Stack developer</h3></div>
                {/* <img src="src/assets/eduardoprofile.png" alt="profilepicture" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
