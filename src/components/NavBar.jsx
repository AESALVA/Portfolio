import React from 'react'
import "../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (<>
    <div className='ContainerNav'>
    <div className='ContainerPart'>
    <div className='ContainerImg'><img src='public/Logo.jpg' alt='logo' ></img></div>
    <div>A.Eduardo Salva</div>
    </div>
    <ul className='NavList'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
    <div className='BarsMenu'><FontAwesomeIcon className='icon' icon={faBarsStaggered} /></div>
    </div>
    </>
  )
}

export default NavBar