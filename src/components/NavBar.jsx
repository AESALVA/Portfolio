import React from 'react'
import "../styles/navbar.css"
import OffCanvas from './OffCanvas'
import Nav from 'react-bootstrap/Nav';
import { faBarsStaggered, faHouse, faUserSecret, faFolderOpen, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const NavBar = () => {
  return (<>
    <div className='ContainerNav'>
    <div className='ContainerPart'>
    <div className='ContainerImg'><Nav.Link href='/'><img src='Logo.jpg' alt='logo' ></img></Nav.Link></div>
    <div><Nav.Link href='/'>Portfolio</Nav.Link> </div>
    </div>
    <ul className='NavList'>
        <li><Nav.Link href="/"><FontAwesomeIcon icon={faHouse} />{" "}Home</Nav.Link></li>
        <li><Nav.Link href="#About"><FontAwesomeIcon icon={faUserSecret} />{" "}About</Nav.Link></li>
        <li><Nav.Link href="#Projects"><FontAwesomeIcon icon={faFolderOpen} />{" "}Projects</Nav.Link></li>
        <li><Nav.Link href="#Contact"><FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}Contact</Nav.Link></li>
    </ul>
    <OffCanvas />
    </div>
    </>
  )
}

export default NavBar