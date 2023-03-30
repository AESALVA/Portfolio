import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {

const [style, setStyle] = useState('TextProfile');
const [styleTwo, setStyleTwo] = useState('');

  useEffect(() => {
    setStyle('TextProfileOn');
    setStyleTwo('TextProfileBackOn');
  }, [])
  
  return (
    <div className="HeaderContainer">
      <div className="HeaderPic">
        <div className="CristalCard">
          <div className="CristalCardContainer">
            <div className={`TextProfileBack ${styleTwo}`}>
              <div className={style}>
              <div className="ContainerPicture">
                  <img
                    src="../assets/eduardoprofile.png"
                    alt="profilepicture"
                  />
                </div>
                <div className="Text">
                <h2>My name is Eduardo Salva</h2>
                <h3>and i'm Web Full Stack developer</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
