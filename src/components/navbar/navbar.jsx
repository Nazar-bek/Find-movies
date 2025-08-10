import React from 'react'
import "./navbar.scss"
import logo from "/logo.svg"
import logotext from "/logo-text.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <a href="#">
                <img src={logo} alt="Logo" />
                <img src={logotext} alt="Logo Text" />
            </a>
        </div>
        <nav className='navbar__menu'>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                 <li>
                    <a href="#">Tv SHows</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;