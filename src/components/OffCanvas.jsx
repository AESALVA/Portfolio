import React from "react";
import {useState}  from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faHouse, faUserSecret, faFolderOpen, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { OffcanvasTitle } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="BarsMenu">
        <FontAwesomeIcon
          onClick={handleShow}
          className="icon"
          icon={faBarsStaggered}
        />
      </div>
      <Offcanvas className="OffCanvas bg-dark" show={show} placement={'top'} onHide={handleClose} name={'top'}>
        <Offcanvas.Header className="px-3 pb-0" closeButton>
            <OffcanvasTitle className="d-flex Color"><div className='ContainerImg'><img src='Logo.jpg' alt='logo' ></img></div>A.E.S</OffcanvasTitle>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-2 d-flex align-items-center pt-0">
    <ul className="NavListResponsive ">
        <li><Nav.Link onClick={handleClose}  href="https://aesalva.github.io/portfolio/"><FontAwesomeIcon icon={faHouse} />{" "}Home</Nav.Link></li>
        <li><Nav.Link href="#About" onClick={handleClose} ><FontAwesomeIcon icon={faUserSecret} />{" "}About</Nav.Link></li>
        <li><Nav.Link href="#Projects" onClick={handleClose}  ><FontAwesomeIcon icon={faFolderOpen} />{" "}Projects</Nav.Link></li>
        <li><Nav.Link href="#Contact" onClick={handleClose} ><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</Nav.Link></li>
    </ul>
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
