import React from 'react';
import ReactIcon from '../images/logo.png';


function Navbar() {
    return (
        <nav>
            <img src={ReactIcon} alt="Logo" className="nav-logo" />
            <h3 className="nav-title">React Facts</h3>
            <h4 className="nav-text">React course - project 1</h4>
        </nav>
    )
}

export default Navbar;