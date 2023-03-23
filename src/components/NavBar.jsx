import React from 'react'
import "../styles/navbar.css"
import OffCanvas from './OffCanvas'



const NavBar = () => {
  return (<>
    <div className='ContainerNav'>
    <div className='ContainerPart'>
    <div className='ContainerImg'><img src='public/Logo.jpg' alt='logo' ></img></div>
    <div>Portfolio</div>
    </div>
    <ul className='NavList'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
    <OffCanvas />
    </div>
    </>
  )
}

export default NavBar