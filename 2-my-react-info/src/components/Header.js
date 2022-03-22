import React from 'react';
import ReactIcon from '../images/React-icon';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={ReactIcon} alt="React-logo" className="nav-logo"></img>
                <ul className="nav-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header